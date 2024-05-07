<?php

class test_FrmStrpLiteEventsController extends FrmUnitTest {

	/**
	 * @var FrmStrpLiteEventsController|null
	 */
	private $controller;

	/**
	 * @var stdClass|null
	 */
	private $form;

	/**
	 * @covers FrmStrpLiteEventsController::process_connect_events
	 * @covers FrmStrpLiteEventsController::should_skip_event
	 * @covers FrmStrpLiteEventsController::count_failed_event
	 * @covers FrmStrpLiteEventsController::track_handled_event
	 * @covers FrmStrpLiteConnectHelper::get_event
	 */
	public function test_process_connect_events() {
		$option_name = FrmStrpLiteEventsController::$events_to_skip_option_name;

		$this->assertFalse( get_option( $option_name ), 'Events should not be skipped before this function has ran.' );

		// Fake an event object and set it to the cache.
		// This also helps to test that the cache actually works.
		// Stripe events expire and can't be generated automatically during Unit Testing.
		$charge = new stdClass(); // Just leave the charge blank. This goal isn't to actually handle an event with this test.

		$invoice         = new stdClass();
		$invoice->charge = $charge;

		// This is just a partial object that has what we need for the code to run.
		$event               = new stdClass();
		$event->object       = 'event';
		$event->id           = 'evt_1CiPtv2eZvKYlo2CcUZsDcO6';
		$event->type         = ''; // Just leave this blank. This goal isn't to actually handle an event with this test.
		$event->livemode     = false;
		$event->data         = new stdClass();
		$event->data->object = $invoice;

		wp_cache_set( $event->id, $event, 'frm_strp' );

		// Confirm that FrmStrpLiteConnectHelper::get_event cache works separately.
		$helper_event = FrmStrpLiteConnectHelper::get_event( $event->id );
		$this->assertTrue( is_object( $helper_event ) );
		$this->assertEquals( $event->id, $helper_event->id );
		unset( $helper_event );

		// Set up the event controller for processing events.
		$this->controller = new FrmStrpLiteEventsController();

		$this->assert_should_skip_event( false, $event->id );

		// Process the event.
		$event_ids  = array( $event->id );
		$this->run_private_method( array( $this->controller, 'process_event_ids' ), array( $event_ids ) );

		$option = get_option( $option_name );
		$this->assertEquals( array( $event->id ), $option, 'The event should be included as a skipped event now.' );

		$this->assert_should_skip_event( true, $event->id );

		// Fake a broken event error message.
		$invalid_event_id = 'evt_1CiPsl2eZvKYlo2CVVyt3LKy';
		$event            = 'Stripe event does not exist';
		wp_cache_set( $invalid_event_id, $event, 'frm_strp' );

		$this->run_private_method( array( $this->controller, 'process_event_ids' ), array( array( $invalid_event_id ) ) );

		$this->delete_last_process_transient( $invalid_event_id );
		$this->assert_should_skip_event( false, $invalid_event_id, 'A failed event should be allowed to retry again.' );

		$this->delete_last_process_transient( $invalid_event_id );
		$this->run_private_method( array( $this->controller, 'process_event_ids' ), array( array( $invalid_event_id ) ) );

		$this->delete_last_process_transient( $invalid_event_id );
		$this->run_private_method( array( $this->controller, 'process_event_ids' ), array( array( $invalid_event_id ) ) );

		$this->assert_should_skip_event( true, $invalid_event_id, 'After several repeated attempts, stop trying to retrieve Stripe event.' );
	}

	private function assert_should_skip_event( $expected, $event_id, $message = '' ) {
		$should_skip_event = $this->run_private_method( array( $this->controller, 'should_skip_event' ), array( $event_id ) );
		$this->assertEquals( $expected, $should_skip_event, $message );
	}

	private function delete_last_process_transient( $event_id ) {
		delete_transient( 'frm_last_process_' . $event_id ); // This is to simulate the 60 seconds in between events so we don't need to wait.
	}

	private function add_basic_shortcodes_for_testing() {
		add_shortcode(
			'return2',
			function() {
				return 2;
			}
		);
		add_shortcode(
			'return3',
			function() {
				return 3;
			}
		);
	}

	/**
	 * Get an object that has the required properties to test Stripe events.
	 * This is the same structure as a Stripe invoice object, but without all of the data.
	 *
	 * @param string $sub_id Stripe subscription ID starting with "sub_".
	 * @return stdClass
	 */
	private function get_fake_stripe_invoice_object( $sub_id ) {
		$period        = new stdClass();
		$period->start = strtotime( gmdate( 'Y-01-01' ) );
		$period->end   = strtotime( gmdate( 'Y-02-01' ) );

		$line         = new stdClass();
		$line->amount = 1000;
		$line->period = $period;

		$invoice               = new stdClass();
		$invoice->subscription = $sub_id;
		$invoice->lines        = new stdClass();
		$invoice->lines->data  = array( $line );

		return $invoice;
	}

	/**
	 * Get the new subscription ID from the subscription table.
	 *
	 * @return int
	 */
	private function get_most_recent_subscription_id() {
		// Do not use FrmDb because of caching.
		global $wpdb;
		return (int) $wpdb->get_var( 'SELECT id FROM ' . $wpdb->prefix . 'frm_subscriptions ORDER BY id DESC LIMIT 1' );
	}

	/**
	 * @param int $payment_limit
	 * @return object|false|null
	 */
	private function create_payment_action_with_payment_limit( $payment_limit ) {
		$action_id = $this->factory->post->create(
			array(
				'menu_order'   => $this->form->id,
				'post_content' => json_encode(
					array(
						'currency'          => 'usd',
						'payment_limit'     => $payment_limit,
						'plan_id'           => $this->maybe_create_plan(),
						'interval'          => 'year',
						'interval_count'    => 1,
						'trial_period_days' => 0,
					)
				),
			)
		);
		return FrmFormAction::get_single_action_type( $action_id, 'payment' );
	}

	/**
	 * @return object
	 */
	private function create_a_test_entry() {
		$field_id                             = FrmDb::get_var( 'frm_fields', array( 'form_id' => $this->form->id ) );
		$entry_data                           = $this->factory->field->generate_entry_array( $this->form );
		$entry_data['item_meta'][ $field_id ] = 2;
		return $this->factory->entry->create_and_get( $entry_data );
	}

	private function run_private_strp_actions_controller_function( $function, ...$params ) {
		return $this->run_private_method( array( 'FrmStrpLiteActionsController', $function ), $params );
	}

	/**
	 * @param object $invoice
	 * @return object|array|false|null
	 */
	private function prepare_from_invoice( $invoice ) {
		$controller = new FrmStrpLiteEventsController();
		$this->set_private_property( $controller, 'invoice', $invoice );
		$this->set_private_property( $controller, 'charge', 'ch_123' );
		$this->set_private_property( $controller, 'status', 'complete' );
		$event           = new stdClass();
		$event->livemode = false;
		$this->set_private_property( $controller, 'event', $event );
		return $this->run_private_method( array( $controller, 'prepare_from_invoice' ) );
	}
}

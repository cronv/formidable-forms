<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

class FrmTransLiteAppHelper {

	/**
	 * @return string
	 */
	public static function plugin_path() {
		return FrmAppHelper::plugin_path() . '/stripe/';
	}

	/**
	 * @return string
	 */
	public static function plugin_url() {
		return FrmAppHelper::plugin_url() . '/stripe/';
	}

	/**
	 * @return string
	 */
	public static function plugin_folder() {
		return basename( self::plugin_path() );
	}

	public static function show_status( $status ) {
		$statuses = array_merge( self::get_payment_statuses(), self::get_subscription_statuses() );
		return isset( $statuses[ $status ] ) ? $statuses[ $status ] : $status;
	}

	/**
	 * @return string[]
	 */
	public static function get_payment_statuses() {
		return array(
			'authorized' => __( 'Authorized', 'formidable' ),
			'pending'    => __( 'Pending', 'formidable' ),
			'complete'   => __( 'Completed', 'formidable' ),
			'failed'     => __( 'Failed', 'formidable' ),
			'refunded'   => __( 'Refunded', 'formidable' ),
			'canceled'   => __( 'Canceled', 'formidable' ),
		);
	}

	/**
	 * @return string[]
	 */
	public static function get_subscription_statuses() {
		return array(
			'pending'       => __( 'Pending', 'formidable' ),
			'active'        => __( 'Active', 'formidable' ),
			'future_cancel' => __( 'Canceled', 'formidable' ),
			'canceled'      => __( 'Canceled', 'formidable' ),
			'void'          => __( 'Void', 'formidable' ),
		);
	}

	/**
	 * Add a note to payment data that will get saved to the payment meta.
	 * This is called when processing events in the Stripe add on.
	 *
	 * @param array  $payment_values
	 * @param string $message
	 * @return void
	 */
	public static function add_note_to_payment( &$payment_values, $message = '' ) {
		if ( ! $message ) {
			$message = sprintf(
				// translators: %s: Payment status.
				__( 'Payment %s', 'formidable' ),
				$payment_values['status']
			);
		}
		$payment_values['meta_value'] = isset( $payment_values['meta_value'] ) ? $payment_values['meta_value'] : array();
		$payment_values['meta_value'] = self::add_meta_to_payment( $payment_values['meta_value'], $message );
	}

	/**
	 * @param string $note
	 *
	 * @return array
	 */
	public static function add_meta_to_payment( $meta_value, $note ) {
		$meta_value   = (array) maybe_unserialize( $meta_value );
		$meta_value[] = array(
			'message' => $note,
			'date'    => gmdate( 'Y-m-d H:i:s' ),
		);
		return $meta_value;
	}

	/**
	 * @param string $option
	 * @param array $atts
	 */
	public static function get_action_setting( $option, $atts ) {
		$settings = self::get_action_settings( $atts );
		$value    = isset( $settings[ $option ] ) ? $settings[ $option ] : '';
		return $value;
	}

	/**
	 * @param array $atts
	 */
	public static function get_action_settings( $atts ) {
		if ( ! isset( $atts['payment'] ) ) {
			return array();
		}

		$atts['payment'] = (array) $atts['payment'];
		if ( empty( $atts['payment']['action_id'] ) ) {
			return array();
		}

		$form_action = FrmTransLiteAction::get_single_action_type( $atts['payment']['action_id'], 'payment' );
		if ( ! $form_action ) {
			return array();
		}

		return $form_action->post_content;
	}

	/**
	 * Allow entry values, default values, and other shortcodes
	 *
	 * @param array $atts - Includes value (required), form, entry
	 * @return string|int
	 */
	public static function process_shortcodes( $atts ) {
		$value = $atts['value'];
		if ( strpos( $value, '[' ) === false ) {
			return $value;
		}

		if ( is_callable( 'FrmProFieldsHelper::replace_non_standard_formidable_shortcodes' ) ) {
			FrmProFieldsHelper::replace_non_standard_formidable_shortcodes( array(), $value );
		}

		if ( ! empty( $atts['entry'] ) ) {
			if ( ! isset( $atts['form'] ) ) {
				$atts['form'] = FrmForm::getOne( $atts['entry']->form_id );
			}
			$value = apply_filters( 'frm_content', $value, $atts['form'], $atts['entry'] );
		}

		$value = do_shortcode( $value );
		return $value;
	}

	/**
	 * @param object $sub
	 * @return string
	 */
	public static function format_billing_cycle( $sub ) {
		$amount   = self::formatted_amount( $sub );
		$interval = self::get_repeat_label_from_value( $sub->time_interval, $sub->interval_count );
		if ( $sub->interval_count == 1 ) {
			$amount = $amount . '/' . $interval;
		} else {
			$amount = $amount . ' every ' . $sub->interval_count . ' ' . $interval;
		}
		return $amount;
	}

	/**
	 * @return array
	 */
	public static function get_repeat_times() {
		return array(
			'day'   => __( 'day(s)', 'formidable' ),
			'week'  => __( 'week(s)', 'formidable' ),
			'month' => __( 'month(s)', 'formidable' ),
			'year'  => __( 'year(s)', 'formidable' ),
		);
	}

	/**
	 * @since 1.16
	 *
	 * @param int $number
	 * @return array
	 */
	private static function get_plural_repeat_times( $number ) {
		return array(
			'day'   => _n( 'day', 'days', $number, 'formidable' ),
			'week'  => _n( 'week', 'weeks', $number, 'formidable' ),
			'month' => _n( 'month', 'months', $number, 'formidable' ),
			'year'  => _n( 'year', 'years', $number, 'formidable' ),
		);
	}

	/**
	 * @since 1.16
	 *
	 * @param string $value
	 * @param int $number
	 * @return string
	 */
	public static function get_repeat_label_from_value( $value, $number ) {
		$times = self::get_plural_repeat_times( $number );
		if ( isset( $times[ $value ] ) ) {
			$value = $times[ $value ];
		}
		return $value;
	}

	public static function formatted_amount( $payment ) {
		$currency = '';
		$amount   = $payment;

		if ( is_object( $payment ) || is_array( $payment ) ) {
			$payment  = (array) $payment;
			$amount   = $payment['amount'];
			$currency = self::get_action_setting( 'currency', array( 'payment' => $payment ) );
		}

		if ( ! $currency ) {
			$currency = 'usd';
		}

		$currency = FrmCurrencyHelper::get_currency( $currency );

		self::format_amount_for_currency( $currency, $amount );

		return $amount;
	}

	/**
	 * @param array $currency
	 * @param float $amount
	 * @return void
	 */
	public static function format_amount_for_currency( $currency, &$amount ) {
		$amount       = number_format( $amount, $currency['decimals'], $currency['decimal_separator'], $currency['thousand_separator'] );
		$left_symbol  = $currency['symbol_left'] . $currency['symbol_padding'];
		$right_symbol = $currency['symbol_padding'] . $currency['symbol_right'];
		$amount       = $left_symbol . $amount . $right_symbol;
	}

	/**
	 * @return string
	 */
	public static function get_date_format() {
		$date_format = 'm/d/Y';
		if ( class_exists( 'FrmProAppHelper' ) ) {
			$frmpro_settings = FrmProAppHelper::get_settings();
			if ( $frmpro_settings ) {
				$date_format = $frmpro_settings->date_format;
			}
		} else {
			$date_format = get_option( 'date_format' );
		}

		return $date_format;
	}

	/**
	 * @param string $date
	 * @param string $format
	 * @return string
	 */
	public static function format_the_date( $date, $format = '' ) {
		if ( empty( $format ) ) {
			$format = self::get_date_format();
		}
		return date_i18n( $format, strtotime( $date ) );
	}

	/**
	 * Set a user id for current payment if a user is logged in.
	 *
	 * @return int
	 */
	public static function get_user_id_for_current_payment() {
		$user_id = 0;
		if ( is_user_logged_in() ) {
			$user_id = get_current_user_id();
		}
		return $user_id;
	}

	/**
	 * @param int $user_id
	 * @return string
	 */
	public static function get_user_link( $user_id ) {
		$user_link = esc_html__( 'Guest', 'formidable' );
		if ( $user_id ) {
			$user = get_userdata( $user_id );
			if ( $user ) {
				$user_link = '<a href="' . esc_url( admin_url( 'user-edit.php?user_id=' . $user_id ) ) . '">' . esc_html( $user->display_name ) . '</a>';
			}
		}
		return $user_link;
	}

	/**
	 * @param mixed  $value
	 * @param string $label
	 * @return void
	 */
	public static function show_in_table( $value, $label ) {
		if ( ! empty( $value ) ) { ?>
			<tr valign="top">
				<th scope="row"><?php echo esc_html( $label ); ?>:</th>
				<td>
					<?php echo esc_html( $value ); ?>
				</td>
			</tr>
			<?php
		}
	}

	/**
	 * Echo a link that includes a data-deleteconfirm attribute.
	 * This includes refund links and links to cancel a subscription.
	 *
	 * @since x.x
	 *
	 * @param string $link
	 * @return void
	 */
	public static function echo_confirmation_link( $link ) {
		$filter = __CLASS__ . '::allow_deleteconfirm_data_attribute';
		add_filter( 'frm_striphtml_allowed_tags', $filter );
		echo FrmAppHelper::kses( $link, array( 'a' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		remove_filter( 'frm_striphtml_allowed_tags', $filter );
	}

	/**
	 * Allow the data-deleteconfirm attribute for confirmation links.
	 * The attribute is used for the confirmation message.
	 *
	 * @since x.x
	 *
	 * @param array $allowed
	 * @return array
	 */
	public static function allow_deleteconfirm_data_attribute( $allowed ) {
		$allowed['a']['data-deleteconfirm'] = true;
		return $allowed;
	}
}

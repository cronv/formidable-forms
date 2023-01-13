<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}
// This view is used on the style page to render a single custom theme card.
// This includes a basic preview (text field and submit button only)
// It also includes the title of the style and some basic meta (# of forms assigned, and tags for "selected" and "default").

?>
<div <?php FrmAppHelper::array_to_html_params( $params, true ); ?>>
	<div class="frm-style-card-preview">
		<div class="frm_form_field form-field">
			<label class="frm_primary_label"><?php esc_html_e( 'Text field', 'formidable' ); ?></label>
			<input type="text" value="<?php esc_attr_e( 'This is sample text', 'formidable' ); ?>" />
		</div>
		<div class="frm_submit">
			<input <?php FrmAppHelper::array_to_html_params( $submit_button_params, true ); ?> />
		</div>
		<?php
		/**
		 * @since x.x
		 *
		 * @param array $args {
		 *     @type WP_Post $style
		 *     @type bool    $is_default_style
		 *     @type bool    $is_active_style
		 * }
		 */
		do_action( 'frm_style_card_after_submit', compact( 'style', 'is_default_style', 'is_active_style' ) );
		?>
	</div>
	<div>
		<span class="frm-style-card-title"><?php echo esc_html( $style->post_title ); ?></span>
	</div>
</div>

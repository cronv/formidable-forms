<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}
// This is the view for the "style page" where you can assign a style to a form and view the list of style templates.
// It is accessed from /wp-admin/admin.php?page=formidable&frm_action=style&id=782

?>
<div class="frm_grid_container">
	<?php // Sidebar. ?>
	<div class="frm_grid_container frm4">
		<?php
		// TODO Render "My styles".
		// TODO the design has a "New style" option here.
		   // TODO this will trigger a new modal.

		// Render "Formidable Styles".
		$style_api = new FrmStyleApi();
		$info      = $style_api->get_api_info();
		foreach ( $info as $key => $style ) {
			if ( ! is_numeric( $key ) ) {
				// Skip active_sub/expires keys.
				continue;
			}
			?>
			<div class="frm6">
				<img style="max-width: 100%; border-radius: 6px;" src="<?php echo esc_url( $style['icon'][0] ); ?>" />
				<?php echo $style['name']; ?>
			</div>
			<?php
		}
		?>
	</div>
	<?php // Preview area. ?>
	<div class="frm8">
		<?php
		/**
		 * The right side body shows a preview (of the target form) so you can see the form you're actually styling.
		 * TODO: There is a floating button here that links to the Style editor page.
		 */
		?>
		Preview Area
		<?php // TODO: What's the best way to do this? Can I use an iframe? ?>
	</div>
</div>

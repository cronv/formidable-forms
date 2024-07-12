<span class="<?php echo esc_attr( $component_class ); ?> frm-colorpicker " <?php echo esc_attr( $component_attr )?>>
	<input type="text" <?php echo esc_attr( $field_name ); ?> id="<?php echo esc_attr( $component['id'] )?>" class="hex" value="<?php echo esc_attr( $field_value ); ?>" <?php do_action( 'frm_style_settings_input_atts', $component['action_slug'] ); ?> />
</span>
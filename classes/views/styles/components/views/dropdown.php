<span class="frm-style-component frm-dropdown">
	<select <?php echo esc_attr( $field_name ); ?> id="<?php echo esc_attr( $component['id'] ) ?>">
		<?php foreach ( $component['options'] as $value => $name ) : ?>
			<option value="<?php echo esc_attr( $value ); ?>" <?php selected( $field_value, $value ); ?>><?php echo esc_html( $name ); ?></option>
		<?php endforeach; ?>
	</select>
</span>
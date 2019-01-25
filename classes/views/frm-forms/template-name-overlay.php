<div id="frm_template_modal" class="frm_hidden settings-lite-cta">
	<div class="metabox-holder">
		<div class="postbox">
			<div class="inside">
				<div class="cta-inside">

					<form name="frm-new-template-form" id="frm-new-template-form" method="post">
						<p>
							<label for="frm_template_name">
								<?php esc_html_e( 'Template name', 'formidable' ); ?>
							</label><br/>
							<input type="text" name="template_name" id="frm_template_name" class="frm_long_input" />
						</p>
						
						<p>
							<label for="frm_template_desc">
								<?php esc_html_e( 'Template Description', 'formidable' ); ?>
							</label><br/>
							<textarea name="template_desc" id="frm_template_desc" class="frm_long_input"></textarea>
						</p>
						<input type="hidden" name="link" id="frm_link" />
						<input type="hidden" name="type" id="frm_action_type" value="frm_install_template" />

						<button type="submit" class="button-primary frm-button-primary">
							<?php esc_html_e( 'Create', 'formidable' ); ?>
						</button>

						<a href="#" class="dismiss">
							<?php esc_attr_e( 'Cancel', 'formidable' ); ?>
						</a>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="frm_preview_template_modal" class="frm_hidden settings-lite-cta">
	<div class="metabox-holder">
		<div class="postbox">
			<div class="inside" id="frm-preview-block">
			</div>
		</div>
	</div>
</div>


export class FrmOverlay {

	constructor() {
		this.body = document.querySelector( 'body' );
	}

	/**
	 * Open overlay
	 *
	 * @param {Object} overlayData - An object containing data for the overlay.
	 * @param {string} overlayData.hero_image - URL of the hero image.
	 * @param {string} overlayData.heading - Heading of the overlay.
	 * @param {string} overlayData.copy - Copy/content of the overlay.
	 * @param {Array}  overlayData.buttons - Array of button objects.
	 * @param {string} overlayData.buttons[].url - URL for the button.
	 * @param {string} overlayData.buttons[].target - Target attribute for the button link.
	 * @param {string} overlayData.buttons[].label - Label/text of the button.
	 */
	open( overlayData ) {
		this.overlayData = {
			hero_image: null,
			heading: null,
			copy: null,
			buttons: []
		};

		this.overlayData = { ...this.overlayData, ...overlayData };
		this.body.insertBefore( this.buildOverlay(), this.body.firstChild );
		this.initCloseButton();
		this.initOverlayIntroAnimation( 200 );

	}

	close() {
		const overlayWrapper = document.querySelector( '.frm-overlay--wrapper' );
		if ( overlayWrapper ) {
			overlayWrapper.remove();
		}
	}

	initCloseButton() {
		const overlayWrapper = document.querySelector( '.frm-overlay--wrapper' );

		if ( overlayWrapper ) {
			const closeButton = document.createElement( 'span' );
			closeButton.classList.add( 'frm-overlay--close' );
			closeButton.addEventListener( 'click', this.close );
			overlayWrapper.prepend( closeButton );
		}
	}

	getHeroImage() {
		if ( this.overlayData.hero_image ) {
			return frmDom.img({ src: this.overlayData.hero_image });
		}
		return '';
	}

	getButtons() {
		const buttons = this.overlayData.buttons.map( ( button ) => {
			if ( ! button.url || '' === button.url ) {
				return '';
			};
			const options = {
				href: button.url,
				text: button.label
			};
			if ( button.target ) {
				options.target = button.target;
			}
			return frmDom.a( options );
		});

		if ( buttons ) {
			const buttonsWrapperElementOptions = { className: 'frm-overlay--cta', children: [] };
			buttons.map( item => buttonsWrapperElementOptions.children.push( item ) );
			return frmDom.div( buttonsWrapperElementOptions );
		}

		return '';
	}

	getHeading() {
		if ( this.overlayData.heading )	{
			return frmDom.tag( 'h2', { className: 'frm-overlay--heading', text: this.overlayData.heading });
		}
		return '';
	}

	getCopy() {
		if ( this.overlayData.copy ) {
			const copy = frmDom.tag( 'div' );
			copy.innerHTML = this.overlayData.copy;
			return frmDom.div({ className: 'frm-overlay--copy', child: copy });
		}
		return '';
	}

	initOverlayIntroAnimation( delay ) {
		const overlayWrapper = document.querySelector( '.frm-overlay--wrapper' );
		if ( overlayWrapper ) {
			setTimeout( () => {
				overlayWrapper.classList.add( 'frm-active' );
			}, delay );
		}
	}

	escapeHtml( html ) {
		return `${html}`;
	}

	buildOverlay() {
		const container = frmDom.div({
			className: 'frm-overlay--container',
			children: [
				frmDom.div({className: 'frm-overlay--hero-image', children: [ this.getHeroImage() ] }),
				this.getHeading(),
				this.getCopy(),
				this.getButtons()
			]
		});

		return  frmDom.div({ className: 'frm-overlay--wrapper frm_wrap', children: [ container ] });
	}
}

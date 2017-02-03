// modalDog
(function( modalDog, $, undefined ) {

	// Define config var
	modalDog.config;

	// Functions to run on load
	modalDog.load = function(options) {

		// Define default plugin config
		var defaults = {
			'topPadding': 120,
			'mobile': false
		};

		// Update plugin config with options
		modalDog.config = $.extend({}, defaults, options);

		// Click modal trigger link
		$('body').on('click', '.trigger-modal', function(e) {
			e.preventDefault();

			// Run callback first (incase we're loading content) - passing callback all data attributes of trigger
			if(modalDog.config['callback']) {modalDog.config['callback']($(this).data());}

			// Show modal
			$('.modal[data-modal="'+$(this).data('modal')+'"]').addClass('active');
		});

		// On close button or overlay click
		$('body').on('click', '.modal .overlay, .modal .btn-close', function() {
			// Hide modal
			$(this).parents('.modal').removeClass('active');
		});
	}

}( window.modalDog = window.modalDog || {}, jQuery ));

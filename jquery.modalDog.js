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

		if(!mobile) {
			// Set height of sub-inner
			$('.sub-inner').height($(window).height() - $('#header').height() - modalDog.config['topPadding']);
		}

		// Click modal trigger link
		$('body').on('click', '.trigger-modal', function(e) {
			e.preventDefault();

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

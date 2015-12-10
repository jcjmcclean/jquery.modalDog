# jquery.modalDog

Add jQuery init code 

    // If there are modals on the page
	if($('.modal').length) {
		// Run modalDog load function
		modalDog.load({
			'mobile': true, // If this is a mobile device set to true)
			'topPadding': 120 // Set custom amount of spacing above modal (e.g. header height)
		});
	}

Add a modal trigger element with class .trigger-modal and data-model attribute linked to the modal you wish to display

    <a class="trigger-modal" data-modal="map"><!-- // link text here --></a>

Add modal structure with data-model attribute

    <section class="modal" data-modal="map">
    	<div class="overlay"><!-- --></div>
    	<div class="sub-inner clearfix">
    		<a class="btn-close"><!-- --></a>
    		<!-- // modal content here -->
    	</div>
    </section>

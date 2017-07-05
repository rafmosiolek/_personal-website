//////////////// SMOOTH SCROLLING - NAVIGATION ////////////////
// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	// Remove links that links to modal (prevent from scrolling page to the top when modal is open)
	// .not('[href=#project1')
	// .not('[href=#project2')
	// .not('[href=#project3')
	// .not('[href=#project4')
	.click(function(event) {
		// On-page links
		if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			// Only prevent default if animation is actually going to happen
			if (target.length) { event.preventDefault(); $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
			// Callback after animation
			var $target = $(target);
				if ($target.is(":focus")) { // Checking if the target was focused
				return false;
				} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				}
			});
		}
	}
});
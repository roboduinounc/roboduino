$(document).ready(function () {
	// Scroll Links
	$('.scroll-link').click(function (event) {
		var target = $(this).attr('href') || $(this).data('target');
		if (!target) {
			return;
		}
		event.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top,
			},
			1000,
			function () {
				window.location.hash = target;
			}
		);
	});
});

ScrollReveal().reveal('.scroll-reveal', {
	duration: 2000,
	delay: 500,
	origin: 'bottom',
	distance: '2rem',
	easing: 'ease-out',
});

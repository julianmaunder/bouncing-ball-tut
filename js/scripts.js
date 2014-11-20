$( document ).ready(function() {
	$('body').each(function(){
		
		function headerParallax() {
			$(window).scroll(function() {
				// Store scrollTop in variable
				var scrollPos = $(window).scrollTop();
				// var viewportHeight = $(window).height();
				console.log(scrollPos);
				console.log(ballPos + 'ball');

				var ballPos = scrollPos - 500;
				var bouncePos = (((550 - ballPos) * 2.5) + ballPos).toFixed(2);
				
				$(".ball").css({ 'transform': 'translate3d(0px, ' + ballPos + 'px, 0)'});
				$(".presents").css({ 'transform': 'translate3d(0px, -' + scrollPos * 2 + 'px, 0)'});
				
				if (scrollPos > 1050) {
					$(".ball").css({ 'transform': 'translate3d(0px, ' + bouncePos + 'px, 0)'});
				}

				if (scrollPos > 1040 && scrollPos > 1055) {
					$(".ball").addClass("bounce");
				}

				else {
					$(".ball").removeClass("bounce");
				}

				if (scrollPos > 1300) {
					$(".question-badge").css('opacity', '1').addClass("question-pop");
				}
			
				if (scrollPos > 1600) {
					$(".html5-badge").css('opacity', '1').addClass("hover");
				}

			});
		}

		window.requestAnimationFrame(headerParallax);

	});
});

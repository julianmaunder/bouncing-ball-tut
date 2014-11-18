$( document ).ready(function() {
	$('body').each(function(){
		
		function headerParallax() {
			$(window).scroll(function() {
				// Store scrollTop in variable
				var scrollPos = $(window).scrollTop();
				// var viewportHeight = $(window).height();
				// console.log(scrollPos);
				// console.log(ballPos + 'ball');

				var ballPos = scrollPos - 500;
				var bouncePos = (((650 - ballPos) * 3) + ballPos).toFixed(2);
				
				$(".ball").css({ 'transform': 'translate3d(0px, ' + ballPos + 'px, 0)'});
				$(".presents").css({ 'transform': 'translate3d(0px, -' + scrollPos * 2 + 'px, 0)'});
				
				if (scrollPos > 1150) {
					$(".ball").css({ 'transform': 'translate3d(0px, ' + bouncePos + 'px, 0)'});
				}
			
			});
		}

		window.requestAnimationFrame(headerParallax);

	});
});

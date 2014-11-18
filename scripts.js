$( document ).ready(function() {
	$('body').each(function(){
		$(window).scroll(function() {
			// Store scrollTop in variable
			var scrollPos = $(window).scrollTop();
			// var viewportHeight = $(window).height();
			console.log(scrollPos);
			var ballPos = scrollPos - 500;
			var bouncePos = ((450 - ballPos) * 3) + ballPos;
			console.log(ballPos + 'ball');
			// .css({ 'transform': 'translate3d(0px, ' + ballPos + 'px, 0) scale('+ scale +')'});
			$(".ball").css({ 'transform': 'translate3d(0px, ' + ballPos + 'px, 0)'});
			$(".presents").css({ 'transform': 'translate3d(0px, -' + scrollPos * 2 + 'px, 0)'});
			if (scrollPos > 950) {
			$(".ball").css({ 'transform': 'translate3d(0px, ' + bouncePos + 'px, 0)'});
			}
			// else {
			// 	$(".ball").css({transform: 'translateY(0)'})
			// };
		});
	});
});

$( document ).ready(function() {
	$('body').each(function(){
		$(window).scroll(function() {
			// Store scrollTop in variable
			var scrollPos = $(window).scrollTop();
			// var viewportHeight = $(window).height();
			console.log(scrollPos);
			var ballPos = scrollPos - 1250;
			console.log(ballPos + 'ball');
			$(".ball").css({transform: 'translateY(' + ballPos + 'px)'});
			// if (scrollPos > 1300) {
			// 	$(".ball").css({transform: 'translateY(-' + ballPos + 'px)'});
			// }
			// else {
			// 	$(".ball").css({transform: 'translateY(0)'})
			// };
		});
	});
});

$( document ).ready(function() {
	$('body').each(function(){
		
		function animation() {
			$(window).scroll(function() {

				var scrollPos = $(window).scrollTop();
				console.log(scrollPos);

				var ballPos = scrollPos - 500;
				var bouncePos = (((550 - ballPos) * 2.5) + ballPos).toFixed(2);
				var tetrisPos = ((scrollPos - 1600) * 1.6).toFixed(2);

				function tetris() {
					if (scrollPos < 1955) {
						$(".tetris-pink").css({ 'transform': 'translateY(' + tetrisPos + 'px)'});
					}
					if (scrollPos < 1800) {
						$(".tetris-pink").css('background', 'url(\'img/tetris3.svg\') no-repeat top left').css('background-size', '100%');
					}
					if (scrollPos > 1800) {
						$(".tetris-pink").css('background', 'url(\'img/tetris2.svg\') no-repeat top left').css('background-size', '100%');
					}
					if (scrollPos > 1880) {
						$(".tetris-pink").css('background', 'url(\'img/tetris1.svg\') no-repeat top left').css('background-size', '100%');
					}
					if (scrollPos > 1955) {
						$(".tetris-pink").css({ 'transform': 'translateY(570px)'});
					}
				}
				
				function header() {
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
				}

				if (scrollPos < 2000) {
					header();
				}

				if (scrollPos > 1200) {
					$(".question-badge").css('opacity', '1').addClass("hover");
				} 

				else {
					$(".question-badge").css('opacity', '0').removeClass(" hover");
				}

				if (scrollPos > 1200) {
					tetris();
				}

			});
		}

		$('#start').keyup(function(){
			var startValue = $(this).val();
			if (startValue === "var animate = true;") {
				$(".check").css('opacity', '1');
				$(".start-ball").addClass('start-ball-bounce');
				$(".start-good-job").removeClass('visually-hidden');
			}
			else {
				$(".check").css('opacity', '0');
				$(".start-ball").removeClass('start-ball-bounce');
			}
		});

		window.requestAnimationFrame(animation);

		hljs.initHighlightingOnLoad();
		$('div.code').each(function(i, block) {
  			hljs.highlightBlock(block);
		});
	});
});

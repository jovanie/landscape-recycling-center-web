//Jquery Slide Animation for Mobile Nav Menu
$(".header__banner__button").click(function() {
	$(".header__nav__menu").stop().slideToggle(250);
});
//Jquery Mobile Nav Toggle
$(document).ready(function() {
	function checkWidth() {
		var windowWidth = $(window).width();
		if (windowWidth <= 951) {
			$(".header__nav__menu").hide();
		}
		if (windowWidth > 951) {
			$(".header__nav__menu").show();

				var maxHeight = 0;

				$(".content__match_height").each(function() {
					if ($(this).height() > maxHeight) {
						maxHeight = $(this).height();
					}
				});

				$(".content__match_height").height(maxHeight);
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
});

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
		}
	}
	checkWidth();
	$(window).resize(checkWidth);
});

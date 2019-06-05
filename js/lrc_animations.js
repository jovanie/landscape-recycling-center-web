//Jquery Slide Animation for Mobile Nav Menu
$(document).ready(function() {

});

//Jquery Mobile Nav Toggle
function checkWidth() {
  var windowWidth = $(window).width();
  if (windowWidth <= 650) {
    $(".header__nav__menu").hide();
  }
  if (windowWidth > 650) {
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

$(window).on('load', function() {
  if ($(".sidebar").height() > $(".content").height()) {
    $(".content").height($(".sidebar").height());
  }
	$(".header__banner__button").click(function() {
    $(".header__nav").slideToggle(500);
  });
});

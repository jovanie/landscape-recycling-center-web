//Jquery Slide Animation for Mobile Nav Menu
$(".header__banner__button").click(function() {
  $(".header__nav").stop().slideToggle(500);
  return false;
});

$(document).ready(function() {
  if (window.innerWidth < 481) {
    $(".sidebar__banner").insertBefore(".content");
  } else {
    $(".sidebar__banner").prependTo(".sidebar");
  }
});

//Jquery Mobile Nav Toggle
function checkWidth() {
  var windowWidth = window.innerWidth;
  if (window.innerWidth < 767) {
    $(".header__nav").hide();
  }
  if (window.innerWidth > 767) {
    $(".header__nav").show();

    var maxHeight = 0;

    $(".content__match_height").each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(".content__match_height").height(maxHeight);
  }

  if (window.innerWidth < 481) {
    $(".sidebar__banner").insertBefore(".content");
  } else {
    $(".sidebar__banner").prependTo(".sidebar");
  }
}
checkWidth();
$(window).resize(checkWidth);

$(window).on('load', function() {
  if (window.innerWidth < 481) {
    $(".sidebar__banner").insertBefore(".content");
  } else {
    $(".sidebar__banner").prependTo(".sidebar");
  }
  if ($(".sidebar").height() > $(".content").height()) {
    $(".content").height($(".sidebar").height());
  }
  $(".header__banner__button").click(function() {
    $('.header__nav').slideToggle();
  });

  if (window.innerWidth < 767) {
    $(".header__nav").hide();
  }
  if (window.innerWidth > 767) {
    $(".header__nav").show();
  }
});

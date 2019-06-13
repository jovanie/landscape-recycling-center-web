$(document).ready(function() {
  $(".header__banner__button").on('click', function() {
    $('.header__nav').slideToggle();
  });
  //$(".header__banner__button").click(function() {
    //$('.header__nav').slideToggle();
  //});
});

// Once Document has loaded
$(window).on('load', function() {
  function checkWidth() {
    var maxHeight = 0;

    var windowWidth = window.innerWidth;

    $(".content, .sidebar").height('auto');
    if (windowWidth <= 480) {

      //      if (window.innerWidth < 481) {
      //      $(".sidebar__banner").insertBefore(".content");
      //  } else {
      //  $(".sidebar__banner").prependTo(".sidebar");
      //}
    }
    if (windowWidth > 480) {
      $(".header__nav__menu").show();
      $(".content, .sidebar").each(function() {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();
        }
      });
      $(".content, .sidebar").height(maxHeight);
    }

    if (window.innerWidth < 767) {
      $(".header__nav").hide();
    }
    if (window.innerWidth > 767) {
      $(".header__nav").show();
    }
  }
  checkWidth();
  $(window).resize(checkWidth);
});

$(document).ready(function () {

});

// Once Document has loaded
$(window).on('load', function () {
  $('.header__banner__button').on('click', function () {
    $('.header__nav').slideToggle();
  });

  function checkHeight(heightAlpha, heightBeta) {
    var maxHeight = 0;
    var windoowHeight = window.innerHeight;
    var heightA = heightAlpha;

    //alert(heightA);
    var heightB = heightBeta;

    //alert(heightB);
    if (heightA > maxHeight) {
      maxHeight = heightA;
    }

    if (heightB > maxHeight) {
      maxHeight = heightB;
    }

    //alert(maxHeight);
    return maxHeight;
  }

  function checkWidth() {
    var maxHeight = 0;

    var windowWidth = window.innerWidth;

    $('.content, .sidebar').height('auto');
    if (windowWidth <= 480) {

      //      if (window.innerWidth < 481) {
      //      $('.sidebar__banner').insertBefore('.content');
      //  } else {
      //  $('.sidebar__banner').prependTo('.sidebar');
      //}
      return 0;}

    if (windowWidth > 480) {
      $('.header__nav__menu').show();
      $('.content, .sidebar').each(function () {
        if ($(this).height() > maxHeight) {
          maxHeight = $(this).height();
        }
      });

      $('.content:not(.content--faq), .sidebar').height(maxHeight);
    }

    if (window.innerWidth < 767) {
      $('.header__nav').hide();
    }

    if (window.innerWidth > 767) {
      $('.header__nav').show();
    }
  }

  checkWidth();
  $(window).resize(checkWidth);

  $('.faq__menu__tag__list__entry__q').click(function () {
    $(this).siblings('.faq__menu__tag__list__entry__content').slideToggle();

    $(this).toggleClass('faq__menu__tag__list__entry__q--active');
  });
});

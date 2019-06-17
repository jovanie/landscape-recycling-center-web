$(window).on('load', function () {
  $('.faq__menu__tag__list__entry__q').click(function () {
    $(this).siblings('.faq__menu__tag__list__entry__content').slideToggle();
    $(this).toggleClass('faq__menu__tag__list__entry__q--active');
  }
);
  checkWidth();
});

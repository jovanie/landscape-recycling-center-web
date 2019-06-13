//Jquery Slide Animation for Mobile Nav Menu

$(document).ready(function() {
  if (window.innerWidth < 481) {
    $(".sidebar__banner").insertBefore(".content");
  } else {
    $(".sidebar__banner").prependTo(".sidebar");
  }
});

//Jquery Mobile Nav Toggle
function checkWidth() {
  //var windowWidth = window.innerWidth;
  if (window.innerWidth > 767) {
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
});

$(document).ready(function() {
    $(".title__hero, .btn-all").each(function(i) {
        $(this).delay(500 * i).queue(function() {
            $(this).addClass("animated");
        });
    });
});

$(document).ready(function() {
    $('.fa-bars').click(function() {
      $('.menu__bottom').toggle();
    });
  });


$(document).ready(function() {
    $('.header__top-select li').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});
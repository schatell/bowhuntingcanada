/*
 * Display the menu items on smaller screens
 */
$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    //menuHeight = menu.height();

    $(pull).on('click', function (e) {
        menu.slideToggle();
    });
});

/*
 * Display the navbar back to normal after resize
 */
$(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

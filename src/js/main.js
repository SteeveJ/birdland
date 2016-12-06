
/**
 * after ready
 */
setTimeout(function() {
    var $nav = $('.navbar-default');
    var $headerTitle = $('.navbar-default .navbar-brand');
    var $headerLink = $('.navbar-default .navbar-nav > li > a')
    $(document).scroll(function() {
        $(this).scrollTop() > 25 ? $($nav).addClass("navbar-custom") : $($nav).removeClass("navbar-custom");
        $(this).scrollTop() > 25 ? $($headerLink).addClass("inherit-color") :$($headerLink).removeClass("inherit-color");
        $(this).scrollTop() > 25 ? $($headerTitle).addClass("inherit-color") :$($headerTitle).removeClass("inherit-color");
    });
}, 1000);
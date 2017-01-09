
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

$(document).ready(function(){
    var url = document.URL;
    var urlSplit = url.split("/");
    var page = urlSplit[urlSplit.length-1].split(".")[0];
    if(page=="prochainement" || page=="artistes"){
        console.log("Page Prochainement");
        var pageHeight = (window.innerHeight);
        var sizeCadre = (pageHeight-294)+"px";
        $("#cadre").css({"height": sizeCadre});

    }
});

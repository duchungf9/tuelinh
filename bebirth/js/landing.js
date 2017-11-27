$(document).ready(function () {
    new WOW().init();
    showMenu();
    $("#slideRelatedProducts").owlCarousel({
        navigation: false,
        pagination: true,
        autoPlay: true,
        autoPlaySpeed: 2000,
        responsive: true,
        items: 4,
        itemsDesktop: [1160, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
});
function showMenu() {
    $('.btnMenu').off('click');
    var click = 0;
    var click2 = 0;
    $('.btnMenu').click(function () {
        if (click == 0) {
            $(this).removeClass('show');
            $(this).addClass('close');
            $('#menuMb').css('margin-top',0);
            click++;
        } else {
            $(this).removeClass('close');
            $(this).addClass('show');
            $('#menuMb').css('margin-top','-670px');
            click--;
        }
    });
    $('.showSubmenu').click(function () {
        if (click2 == 0) {
            $('.hasSub').show(500);
            click2++;
        } else {
            $('.hasSub').hide(500);
            click2--;
        }
    });
}
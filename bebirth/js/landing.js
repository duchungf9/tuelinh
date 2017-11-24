$(document).ready(function () {
    showMaterials();
    $("#slideRelatedProducts").owlCarousel({
        navigation: false,
        pagination: true,
        autoPlay: false,
        autoPlaySpeed: 2000,
        responsive: true,
        items: 4,
        itemsDesktop: [1160, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
});
function menu(btnClick) {
    $(btnClick).off('click');
    var click = 0;
    $(btnClick).click(function () {
        var menu = $(this).data('menu');
        if (click == 0) {
            $(menu).addClass('transX0');
            $(this).css({'background': 'url("http://www.duoclieutuelinh.vn/frontend/images/menu-close.png")'});
            click++;
        } else {
            $(menu).removeClass('transX0');
            $(this).css({'background': 'url("http://www.duoclieutuelinh.vn/frontend/images/menu-open.png")'});
            click--;
        }
    });
}
function showMaterials() {

}
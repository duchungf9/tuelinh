$(document).ready(function () {
    var clickMenu = 0;
    $(".btnMenu").unbind().click(function () {
       if(clickMenu == 0){
           $(this).removeClass('btnClose');
           $(this).addClass('btnOpen');
           $('.menuTop').css('right','0');
           clickMenu++;
       }else{
           $(this).removeClass('btnOpen');
           $(this).addClass('btnClose');
           $('.menuTop').css('right','-200px');
           clickMenu--;
       }
    });
});//end document

function showPopupVideo(btnCall, popupName) {
    $(btnCall).click(function () {
        var src = $(this).data('src');
        var title = $(this).data('title');
        $(popupName).fadeIn();
        $(popupName).find('iframe').attr('src', src);
        $(popupName).find('.title').text(title);
        $(popupName + ' .close-popup').click(function () {
            $(popupName).find('iframe').attr('src', '');
            $(popupName).fadeOut();
        });
    });
}
function showPopup(btnCall,popupName) {
    $(btnCall).click(function () {
        $(popupName).fadeIn();
        $(popupName + ' .close-popup').click(function () {
            $(popupName).fadeOut();
        });
    });
}
function showPopupNotify(popupName, message) {
    $(popupName).fadeIn();
    $(popupName).find('.message').html(message);
    $(popupName + ' .close-popup').click(function () {
        $(popupName).fadeOut();
    });
}


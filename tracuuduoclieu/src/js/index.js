$(document).ready(function () {
    $(".btnChangePage").click(function () {
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $('.btnChangePage').removeClass('active');
        var height1 = $('#page1').height();
        var height2 = $('#page2').height();
        var height3 = $('#page3').height();
        var height4 = $('#page4').height();
        if (scrollTop <= height1) {
            $('.bt-0').addClass('active');
        } else if (scrollTop >= height1 && scrollTop < (height1 + height2)) {
            $('.bt-1').addClass('active');
        } else if (scrollTop >= (height1 + height2) && scrollTop < (height1 + height2 + height3)) {
            $('.bt-2').addClass('active');
        } else if (scrollTop >= (height1 + height2 + height3) && scrollTop < (height1 + height2 + height3 + height4)) {
            $('.bt-3').addClass('active');
        }else if (scrollTop >= (height1 + height2 + height3 + height4)) {
            $('.bt-4').addClass('active');
        }
    });
    showPopupVideo('.play-btn','.popup-video');
    showPopup('.rule-btn','.popup-rule');
    showPopup('.his-btn','.popup-his');
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

$(document).ready(function () {
    var start = $("#sidebar").offset().top + $("#sidebar").height()+100;
    var stop = $('#stop').offset().top;
    $(window).scroll(function () {
        var o = $(window).scrollTop();
        if(o >= start){
            $("#sidebar").addClass("fixed");
        }else if( o < start || o > stop ){
            $("#sidebar").removeClass("fixed");
        }
    });
});
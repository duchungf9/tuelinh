function showPopupNotify(s,i){$(s).fadeIn(),$(s).find(".message").html(i),$(s+" .close-popup").click(function(){$(s).fadeOut()})}$(document).ready(function(){var s=0;$(".btnMenu").unbind().click(function(){0==s?($(this).removeClass("btnClose"),$(this).addClass("btnOpen"),$(".menuTop").css("right","0"),s++):($(this).removeClass("btnOpen"),$(this).addClass("btnClose"),$(".menuTop").css("right","-200px"),s--)}),$(".img-thumbs").length>0&&$(".img-thumbs").click(function(){var s=$(this).data("img"),i=$(this).data("infos");$(this).siblings().removeClass("active"),$(this).addClass("active"),$(s).siblings().removeClass("active"),$(s).addClass("active"),$(i).siblings().removeClass("active"),$(i).addClass("active")})});
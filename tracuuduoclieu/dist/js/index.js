function showPopupVideo(t,n){$(t).click(function(){var t=$(this).data("src"),i=$(this).data("title");$(n).fadeIn(),$(n).find("iframe").attr("src",t),$(n).find(".title").text(i),$(n+" .close-popup").click(function(){$(n).find("iframe").attr("src",""),$(n).fadeOut()})})}function showPopup(t,n){$(t).click(function(){$(n).fadeIn(),$(n+" .close-popup").click(function(){$(n).fadeOut()})})}function showPopupNotify(t,n){$(t).fadeIn(),$(t).find(".message").html(n),$(t+" .close-popup").click(function(){$(t).fadeOut()})}$(document).ready(function(){var t=0;$(".btnMenu").unbind().click(function(){0==t?($(this).removeClass("btnClose"),$(this).addClass("btnOpen"),$(".menuTop").css("right","0"),t++):($(this).removeClass("btnOpen"),$(this).addClass("btnClose"),$(".menuTop").css("right","-200px"),t--)})});
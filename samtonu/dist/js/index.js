function showPopupNotify(e,i){$(e).fadeIn(),$(e).find(".message").html(i),$(e+" .close-popup").click(function(){$(e).fadeOut()})}$(document).ready(function(){"undefined"!=typeof WOW&&(new WOW).init();var e=0;$(".btnMenu").unbind().click(function(){0==e?($(this).removeClass("btnClose"),$(this).addClass("btnOpen"),$(".menuTop").css("right","0"),e++):($(this).removeClass("btnOpen"),$(this).addClass("btnClose"),$(".menuTop").css("right","-250px"),e--)});var i=0;if($(".menuTop>li").hover(function(){}),$(".menuTop li").click(function(){0==i?($(this).find(".subMenu").addClass("active"),i++):($(this).find(".subMenu").removeClass("active"),i--)}),$("#block2_slider").length>0&&$("#block2_slider").owlCarousel({navigation:!1,pagination:!0,autoPlay:!1,autoPlaySpeed:2e3,responsive:!0,items:3,itemsDesktop:[1153,3],itemsDesktopSmall:[1152,2],itemsTablet:[800,1],itemsMobile:[479,1]}),$("#block4_slider").length>0&&$("#block4_slider").owlCarousel({navigation:!1,pagination:!0,autoPlay:!0,autoPlaySpeed:2e3,responsive:!0,items:4,itemsDesktop:[1220,4],itemsDesktopSmall:[1024,3],itemsTablet:[768,2],itemsMobile:[500,1]}),$("#block7_slider").length>0&&$("#block7_slider").owlCarousel({navigation:!1,pagination:!0,autoPlay:!0,autoPlaySpeed:2e3,responsive:!0,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsMobile:[479,1]}),$("#block16_slider").length>0&&$("#block16_slider").owlCarousel({navigation:!1,pagination:!0,autoPlay:!1,autoPlaySpeed:2e3,responsive:!0,items:4,itemsDesktop:[1220,4],itemsDesktopSmall:[1024,3],itemsTablet:[768,2],itemsMobile:[500,1]}),$("#sidebar").length>0){var s=$("#sidebar").height(),t=$("#sidebar").offset().top+s+100;$(window).scroll(function(){var e=$(window).scrollTop(),i=$("#footer").offset().top-s;t<=e&&e<=i?$("#sidebar").addClass("fixed"):$("#sidebar").removeClass("fixed")})}});
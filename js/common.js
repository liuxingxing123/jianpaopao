$(function(){
    $('.topContent ul li').hover(function(){
        $(this).addClass('topHover').siblings().removeClass('topHover');
    });

    $('.leftNav ul li').hover(function(){
        var leftL=$(this).position().left;
        console.log("124"+leftL);
        $('.Lihover').animate({
            left:leftL
        },500);
    });
});
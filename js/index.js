/**
 * Created by 123456 on 2017/8/15.
 */
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion',deviceMotionHandler, false);
}
var speed = 30;//速度
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(eventData) {
    var acceleration =eventData.accelerationIncludingGravity;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
        //简单的摇一摇触发代码
        // alert("x="+x+",y="+y+",z="+z);
        $("canvas").animate({
            left:x
        },'slow');
    }
    lastX = x;
    lastY = y;
    lastZ = z;
}
$(function(){
    $('.indexleftNav ul li').hover(function(){
        var topL=$(this).position().top;
        $('.Lihover').animate({
            top:topL+1
        },500);
    });


});

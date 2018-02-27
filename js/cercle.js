/**
 * Created by 123456 on 2017/9/11.
 */
var cercleObj=function(){
    this.x=[];     //x位置
    this.y=[];    //y位置
    this.l=[];   //大小
    this.Xspd=[];    //x速度
    this.Yspd=[];    //y速度
    this.arph=[];   //透明度
    this.amp=[];
    this.arphs=0;
};
cercleObj.prototype.num=6;
cercleObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.arph[i]=Math.random().toFixed(1);
        this.x[i]=Math.random()*cavW;
        this.y[i]=Math.random()*cavH;
        this.l[i]=Math.random()*200;
        this.amp[i]=10+Math.random()*15;
        this.Xspd[i]=Math.floor(Math.random()*7);
        this.Yspd[i]=Math.floor(Math.random()*7);
    }
}
cercleObj.prototype.draw=function(ctx,r,g,b){
    this.arph[i]=Math.random().toFixed(1);
    this.arphs+=delTiem*0.0008;
    var text=delTiem*0.08;
    var l=Math.sin(this.arphs);
    // ctxC.strokeStyle="#f39800";
    for( var i=0; i<this.num;i++){
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth=3;
        // ctx.strokeStyle="rgba(252,226,142,"+this.arph[i]+")";
        ctx.strokeStyle="rgba("+r+","+g+","+b+","+this.arph[i]+")";
        ctx.arc(this.x[i],this.y[i],this.l[i],0,360,false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}


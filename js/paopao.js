/**
 * Created by 123456 on 2017/9/11.
 */
var paopaoObj=function(){
    this.alive=[];
    this.l=[];
    this.spd=[];
    this.x=[];
    this.y=[];
    this.arph=[];   //透明度
    this.amp=[];
    this.paopaoIcon=new Image();
};
paopaoObj.prototype.num=40;
paopaoObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.arph[i]=Math.random().toFixed(1);
        this.alive[i]=true;
        this.x[i]=cavW/5+Math.random()*cavW*3/5;
        this.y[i]=cavH*2/5+Math.random()*cavH*3/5;
        this.spd[i]=Math.random()*0.001+0.005;
        this.amp[i]=20+Math.random()*15;
        this.born(i);
    }
}
var flag=0;
paopaoObj.prototype.draw=function(ctx,r,g,b,m){
    for( var i=0; i<this.num;i++){
        if(this.alive[i]){
            ctx.save();
            ctx.beginPath();
            if(this.arph[i]>0 && this.arph[i]<=1){
                // ctx.arc(this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],0,360,false);
                ctx.fillStyle="rgba("+r+","+g+","+b+","+this.arph[i]+")";
                ctx.arc(this.x[i],this.y[i],this.l[i],0,360,false);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }
        }
    }
}
paopaoObj.prototype.born=function(i){
    this.x[i]=Math.random()*cavW;
    this.y[i]=Math.random()*cavH*2/5;
    this.l[i]=Math.random()*120;
    this.spd[i]=Math.random()*0.001+0.005;
    this.alive[i]=true;
}
function paopaoMonitor(){
    var num=0;
    for(var i=0; i<paopao.num;i++){
        if(paopao.alive[i]) num++;
    }
    if(num<95){
        sendPaopao();
        return;
    }
}
function sendPaopao(){
    for(var i=0; i<paopao.num;i++){
        if(!paopao.alive[i]){
            paopao.born(i);
            return;
        }
    }
}

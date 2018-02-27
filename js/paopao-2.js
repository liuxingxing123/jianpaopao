/**
 * Created by 123456 on 2017/9/11.
 */
var paopao2Obj=function(){
    this.alive=[];
    this.l=[];
    this.spd=[];
    this.x=[];
    this.y=[];
    this.arph=[];   //透明度
    this.amp=[];
    this.paopaoIcon=new Image();
};
paopao2Obj.prototype.num=70;
paopao2Obj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.arph[i]=Math.random().toFixed(1);
        this.alive[i]=true;
        this.x[i]=cavW/5+Math.random()*cavW*3/5;
        this.y[i]=cavH*2/5+Math.random()*cavH*3/5;
        this.spd[i]=Math.random()*0.017+0.003;
        this.amp[i]=20+Math.random()*15;
        this.born(i);
    }
}
var flag=0;
paopao2Obj.prototype.draw=function(ctx,r,g,b,m){
var xs=Math.random();
var xx;
    for( var i=0; i<this.num;i++){
        var s=this.spd[i]*delTiem;
        if(this.alive[i]){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle="rgba("+r+","+g+","+b+","+this.arph[i]+")";
            // this.y[i]-= this.spd[i]*2*delTiem;
            if(xs>0.5){
                xx=1;
                this.x[i]+=this.spd[i]*0.2*delTiem;
            }else{
                xx=0;
                this.x[i]-=this.spd[i]*0.2*delTiem;
            }
            if(flag==0){
                this.l[i]+=this.spd[i]*delTiem;
                if(this.l[i]>=m){
                    flag=1;
                }
            }else{
                this.l[i]-=this.spd[i]*delTiem;
                if(this.l[i]<=0){
                    flag=0;
                }
            }
            if(this.l[i]>0){
                // ctx.arc(this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],0,360,false);
                ctx.arc(this.x[i],this.y[i],this.l[i],0,360,false);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }
            if(this.l[i]>m){
                this.l[i]=m;
            }
            if(this.l[i]<0){
                this.alive[i]=false;
            }
            if(this.y[i]<110){
                this.alive[i]=false;
            }
        }

            // this.alive[i]=false;
    }
}
paopao2Obj.prototype.born=function(i){
    this.x[i]=cavW/7+Math.random()*cavW*7/10;
    this.y[i]=cavH/3+Math.random()*cavH*3/5;
    this.l[i]=Math.random()*80;
    this.spd[i]=Math.random()*0.013+0.002;
    this.alive[i]=true;
}
function paopao2Monitor(){
    var num=0;
    for(var i=0; i<paopao2.num;i++){
        if(paopao2.alive[i]) num++;
    }
    if(num<70){
        sendPaopao2();
        return;
    }
}
function sendPaopao2(){
    for(var i=0; i<paopao2.num;i++){
        if(!paopao2.alive[i]){
            paopao2.born(i);
            return;
        }
    }
}

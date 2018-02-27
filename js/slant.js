/**
 * Created by 123456 on 2017/9/11.
 */
var slantObj=function(){
    this.alive=[];
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];
    this.arph=0;
    this.amp=[];
    this.paopaoIcon=new Image();
};
slantObj.prototype.num=6;
slantObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;
        this.arph[i]=Math.random().toFixed(1);
        this.x[i]=Math.random()*cavW;
        this.l[i]=Math.random()*300;
        this.spd[i]=Math.random()*0.017+0.003;
        this.amp[i]=20+Math.random()*15;
        this.born(i);
    }
}
slantObj.prototype.draw=function(ctx){
    this.arph[i]=Math.random().toFixed(1);
    this.arph+=delTiem*0.0008;
    var l=Math.sin(this.arph);
    for( var i=0; i<this.num;i++){
        if(this.alive[i]){
            this.x[i]-= this.spd[i]*2*delTiem;
            //this.x[i]+=this.amp*l;
            if(this.x[i]>=300){
                this.l[i]=300;
            }
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(this.x[i],this.x[i]+80);
            ctx.lineTo(this.x[i]+80,this.x[i]);
            ctx.lineWidth=3;
            ctx.strokeStyle="rgba(252,226,142,"+this.arph[i]+")";
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(this.x[i]+10,this.x[i]+150);
            ctx.lineTo(this.x[i]+150,this.x[i]+10);
            ctx.lineWidth=3;
            ctx.strokeStyle="rgba(252,226,142,"+this.arph[i]+")";
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
            var h=cavH+30;
            if(this.x[i]<-h){
                this.alive[i]=false;
            }
        }
    }
}
slantObj.prototype.born=function(i){
    this.x[i]=i*80+Math.random()*600;
    this.y[i]=cavH;
    this.l[i]=30;
    this.alive[i]=true;
}
function slantMonitor(){
    var num=0;
    for(var i=0; i<slant.num;i++){
        if(slant.alive[i]) num++;
    }
    if(num<15){
        sendPaopao3();
        return;
    }
}
function sendPaopao3(){
    for(var i=0; i<slant.num;i++){
        if(!slant.alive[i]){
            slant.born(i);
            return;
        }
    }
}

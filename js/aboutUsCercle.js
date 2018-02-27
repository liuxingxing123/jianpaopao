var aboutObj=function(){
    this.x=[];     //x位置
    this.y=[];    //y位置
    this.l=[];   //大小
    this.Xspd=[];    //x速度
    this.Yspd=[];    //y速度
    this.arph=[];   //透明度
    this.amp=[];
    this.arphs=0;
};
aboutObj.prototype.num=3;
aboutObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.arph[i]=Math.random().toFixed(1);
        this.x[i]=canv5.width/2;
        this.y[i]=canv5.height/2;
        this.l[i]=Math.random()*500;
    }
}
aboutObj.prototype.draw=function(){
    var flag=0;
    this.arph[i]=Math.random().toFixed(1);
    // this.arphs+=delTiem*0.0008;
    var text=delTiem*0.08;
    var l=Math.sin(this.arphs);
    // ctxC.strokeStyle="#f39800";
    for( var i=0; i<this.num;i++){
        // ctx5.save();
        ctx5.beginPath();
        ctx5.lineWidth=5;
        ctx5.strokeStyle="rgba(252,226,142,"+this.arph[i]+")";
        if(flag==0){
            this.arphs+=delTiem*0.0008;
            if(this.arphs>2){
                flag=1;
            }
        }else{
            this.arphs-=delTiem*0.0008;
            if(this.arphs<=0){
                flag=0;
            }
        }
        ctx5.arc(this.x[i],this.y[i],this.l[i],0,this.arphs,false);
        ctx5.stroke();
        ctx5.closePath();
        ctx5.restore();
    }
}
class Rect{

constructor(x,y,width,height){

    var opt={
isStatic : true

    }

this.body=Bodies.rectangle(x,y,width,height,opt);
this.width=width;
this.height=height;
World.add(world,this.body);

}

display(){
fill("red");
rect(400,650,this.width,this.height);



}


}



class RectR{

    constructor(x,y,width,height){

        var opt={
    isStatic : true
    
        }
    
    this.body=Bodies.rectangle(x,y,width,height,opt);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
    
    display(){
    fill("red");
    rect(295,620,this.width,this.height);
    }
    }

class RectL{



    constructor(x,y,width,height){

        var opt={
    isStatic : true
    
        }
    
    this.body=Bodies.rectangle(x,y,width,height,opt);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
    
    display(){
    fill("red");
    rect(505,620,this.width,this.height);
    }



















}


























class Snow{
    constructor(x,y){
        var options={
            friction:0.001
        }
        this.snow=Bodies.circle(x,y,20,options);
        World.add(world,this.snow);
        this.image=loadImage("snow5.webp")
    }
    resetSnow(){
        if(this.snow.position.y>height){
            Matter.Body.setPosition(this.snow,{x:random(0,1200),y:random(0,200)})
        }
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.snow.position.x,this.snow.position.y,20,20);
    }
}
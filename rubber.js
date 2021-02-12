class Rubber{
    constructor(){
       
        this.rbr=Matter.Bodies.circle(500,500,50);
        Matter.World.add(world,this.rbr);
    }
    display(){
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.rbr.position.x,this.rbr.position.y,50,50);
        
    }
}
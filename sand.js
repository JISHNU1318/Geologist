class Sand {
    constructor(x,y){
        
        this.sand=Matter.Bodies.circle(x,y,2,);
        Matter.World.add(world,this.sand);
    }
    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.sand.position.x,this.sand.position.y,20,20);
    }
}
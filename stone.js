class Stone {
    constructor(){
       
        this.iron=Matter.Bodies.rectangle(400,400,50,50);
        Matter.World.add(world,this.iron);
    }
    display(){
        fill("black");
        rectMode(CENTER);
        rect(this.iron.position.x,this.iron.position.y,50,50);
    }
}
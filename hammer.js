class Hammer {
    constructor(x, y) {
      
      this.hammer = Bodies.rectangle(x, y, 200, 10, );
      this.width = 200;
      this.height = 50;
      
      World.add(world, this.hammer);
    }
    display(){
      this.hammer.position.x=mouseX;
      this.hammer.position.y=mouseY;
      var pos =this.hammer.position;
      var angle = this.hammer.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
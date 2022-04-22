class Player {

  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.

    

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}

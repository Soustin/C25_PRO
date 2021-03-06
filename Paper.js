class Paper {
    constructor(x, y, r) {
      var options = {
          'isStatic': false,
          'restitution':1.0,
          'friction':1.0,
          'density':2.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.image = loadImage("Ball Image for crumpled balls 2 project.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image , 0, 0, this.r/2);
      pop();
    }
  };
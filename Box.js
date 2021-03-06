class Box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=300;
		this.dustbinHeight=90;
		this.wallThickness=15;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})

		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/1.9, this.y-87, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/1.9, this.y-87, this.wallThickness, 150, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
      rectMode(CENTER)
      fill(255)
			angleMode(RADIANS)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, 190);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, 190);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
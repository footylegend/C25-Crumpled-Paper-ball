class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image= paperBallImage;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			var angle = this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(180,100,130)
			image(this.image,0,-25,this.r+20, this.r+20);
			pop()
			
	}

}
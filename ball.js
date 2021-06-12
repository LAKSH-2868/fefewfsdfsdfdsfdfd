class Ball{
    constructor(x,y,r){
        var options = {
            'restitution':1,
            'density':10,
            'frictionAir':0.02
        }
            this.r = r;
            this.body = Bodies.circle(x,y,r,options);
            World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
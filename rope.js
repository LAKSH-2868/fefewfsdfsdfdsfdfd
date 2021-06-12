class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:1
        }
        this.pointB = pointB;
        this.body = constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.bodyA.position;
        var poss = this.pointB;
        push();
        strokeWeight(4);
        stroke("red");
        line(pos.x,pos.y,poss.x,poss.y);
        pop();
    }
}
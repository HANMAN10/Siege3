class SlingShot{
    
    constructor(bodyA, pointB) {

        var slingShot_options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10            
        }

        this.slingShot = Constraint.create(slingShot_options);
        this.pointB = pointB;

        World.add(world, this.slingShot);
    }

     
    fly() {

        this.slingShot.bodyA = null;   
    }

    display() {    

        if(this.slingShot.bodyA) {

            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
    
            push();
            stroke("blue");

            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }

            pop();
        }
    }

    attach(body) {
        this.slingShot.bodyA = body                
    }
}
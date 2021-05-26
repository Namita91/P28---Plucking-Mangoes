class launcher {
    constructor(boyHand,stoneBody) {
        var options = {
            pointA: boyHand,
            bodyB: stoneBody,
            length: 5,
            stiffness: 0.005
        }
        this.pointA = boyHand;
        this.launcherBody = Constraint.create(options);
        World.add(world, this.launcherBody);
    }

    display() {
        
        if(this.launcherBody.bodyB) {
            var point1 = this.pointA;
            var point2 = this.launcherBody.bodyB.position;
            push();
            strokeWeight(4);
            line(point1.x, point1.y, point2.x, point2.y);
            pop();
        }
        
    }

    shoot() {
        this.launcherBody.bodyB = null;
    }

    attach(body) {
        this.launcherBody.bodyB = body;
    }
}
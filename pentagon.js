class Pentagon {

    constructor(x, y, width, height, angle) {
        var base_options = {
            isStatic: false,
            'restitution': 1,
            'friction': 1,
            'density': 1
        }

        this.body = Bodies.rectangle(x, y, width, height, base_options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height)
    pop();
    }

}
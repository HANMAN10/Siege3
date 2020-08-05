class Box {

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
        this.visiblity = 255;

        World.add(world, this.body);
    }

    display() {

        if(this.body.speed < 3) {
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
          else{
            World.remove(world, this.body);
            push();
            this.Visiblity -= 5;
            tint(255, this.Visiblity);
            pop();
          }
    }

    score() {
        if(this.Visiblity < 0 && this.Visiblity > -1005) {
          score ++;
          console.log(score);
        }
      }

}
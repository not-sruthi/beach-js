class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke('yellow');
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}

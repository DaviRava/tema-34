class Ball{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.r = 30
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("biscoito.png")
        this.trajetory = []
        this.animation = [this.image]
        this.sink = false
        this.speed = 0.05151

        World.add(world,this.body)

    }

    animate(){
        this.speed+=0.05151
    }




    show(){
    var pos = this.body.position
    var index = floor(this.speed%this.animation.length)
    push()
    imageMode(CENTER)
    image(this.animation[index], pos.x, pos.y, this.r, this.r)
    pop()

    if (this.body.velocity.x > 0 && pos.x > 10) {
        var position = [pos.x,pos.y]
        this.trajetory.push(position)
        
    }

    for (let i = 0; i < this.trajetory.length; i++) {
        image(this.image,this.trajetory[i][0], this.trajetory[i][1], 5, 5)
        
        
        
    }

        
    }
    shooting(){
        Matter.Body.setStatic(this.body, false)
        var newangle = cannon.angle -28
        newangle = newangle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newangle)
        velocity.mult(0.5)
        Matter.Body.setVelocity(this.body,{
            x:velocity.x*(180/3.14),
            y:velocity.y*(180/3.14)
        })
        
    }
}
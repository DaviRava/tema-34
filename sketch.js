const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var matrizball = []



function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  angleMode(DEGREES)
  angle = 20

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  cannon = new Cannon(180, 110, 130, 100, angle)
  
}


function draw() 
{
  background("black");
  Engine.update(engine)

  for (let i = 0; i < matrizball.length; i++) {
    exibir(matrizball[i], i);
    collider(i)
    
  }

  cannon.show()

  for(let i = 0; i < matrizball.length; i++){
  if (collide(matrizball[i], cachorro) == true) {
    //colocar explozao
  }
}
}

function keyReleased(){
  if (keyCode===DOWN_ARROW) {
    matrizball[matrizball.length-1].shooting()
  }
}

function keyPressed(){
  if (keyCode===DOWN_ARROW) {
    cannonBall = new Ball(cannon.x,cannon.y) 
    cannonBall.trajetory = []
    Matter.Body.setAngle(cannonBall.body,cannon.angle)
    matrizball.push(cannonBall)
  }
}

function exibir(ball,index){
  if (ball) {
    ball.show()
    ball.animate()
    if (ball.body.position.x >= width || ball.body.position.y >= height-50) {
      if (!ball.sink) {
        ball.remove(index)
        soundwatter.play()
        soundwatter.setVolume(0.05)
      }
    }
  }

}

function collider(body, sprite) {
  if (body !== null) {
    var distancia = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y)

    if (distancia <= 80) {
      return true

    }

    else {
      return false
    }
  }

}



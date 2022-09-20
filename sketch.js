const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cachorro, cachorroIMG;
var explosao, explosaoIMG;


var matrizball = []


function preload() {
  cachorroIMG = loadImage("./cachorro.png")
  explosaoIMG = loadImage("./explosao.png")


}

function setup() {
  createCanvas(windowWidth,500);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  angleMode(DEGREES)
  angle = 20

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  cannon = new Cannon(180, 435.15412, 130, 100, angle)

  cachorro = Bodies.rectangle(width/2 +400, 440, 60, 60, options);

  explosao = Bodies.rectangle(width/2 +400, 440, 60, 60, options);


  /*cachorro = createImg("./cachorro.png")
  cachorro.position(width/2 + 400, 440)
  cachorro.size(60, 60)*/

  /*explosao = createImg("./explosao.png")
  explosao.position(width/2 + 400, 440)
  explosao.size(60, 60)*/
  



  
}


function draw() {
  background("black");
  Engine.update(engine)

  rect(ground.position.x, ground.position.y, width * 2, 1)
  image(cachorroIMG, cachorro.position.x, cachorro.position.y, 60, 60)

  for (let i = 0; i < matrizball.length; i++) {
    exibir(matrizball[i], i);
    collider(i)
    
  }

  cannon.show()
  collider()

  
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
    //acrescentar o sumisso do osso

  }

}

function collider() {
  if (this.cachorro !== null) {
    //var distancia = dist(body, body, sprite, sprite)
    for (var i = 0; i< matrizball.length; i++){
    var distancia = Matter.SAT.collides(this.cachorro, matrizball[i].body)
    console.log(distancia)
    if (distancia.collided) {
      cachorro = null
      image(explosaoIMG, explosao.position.x, explosao.position.y, 60, 60)
      return true

    }

    else {
      return false
    }
    
  }
}

}



var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(100,200,30,30);
  wall = createSprite(1300,200,20,100);
  speed = random(55,90);
    weight = random(400,1500);
  car.velocityX = speed;
}


function draw() {
  background("black");  
  if(isTouching()){
    car.velocityX = 0;
    car.x = 1290;
    var deformation = (0.5 * weight * speed * speed)/22500;

    if(deformation > 180){
      car.shapeColor = "red";
    }
    else if(deformation < 100){
      car.shapeColor = "green";
    }

    else if(deformation < 100 && deformation > 180) {
      car.shapeColor = "yellow"; 
    }
  }
  console.log(deformation);
  drawSprites();


}
function isTouching(){
  if(wall.x - car.x <= wall.width/2 + car.width/2){
    return true;


  }
  else{
    return false;
  }
}
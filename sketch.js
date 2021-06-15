var deerAni, ManAni, manAni, WomanAni, GirlAni, bikeImg, BranchImg, carImg, CarImg, leavesImg, puddleImg, ScooterImg;
var immunityImg;
var bgImg1;

var deer, Man, man, Woman, Girl, bike, Branch, car, Car, leaves, puddle, Scooter;
var immunity;

function preload()
{
 deerAni = loadAnimation("deer1.png", "deer2.png", "deer3.png", "deer4.png", "deer5.png");
 ManAni = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png");
 manAni = loadAnimation("man11.png", "man12.png", "man13.png", "man14.png", "man15.png", "man16.png", "man17.png", "man18.png");
 WomanAni = loadAnimation("woman1.png", "woman2.png", "woman3.png", "woman4.png", "woman5.png", "woman6.png", "woman7.png", "woman8.png");
 GirlAni = loadAnimation("girl1.png", "girl2.png", "girl3.png", "girl4.png", "girl5.png", "girl6.png", "girl7.png", "girl8.png", "girl9.png");
 bikeImg = loadImage("bike.png");
 BranchImg = loadImage("branch.png");
 carImg = loadImage("car1.png");
 CarImg = loadImage("car2.png");
 leavesImg = loadImage("leaves.png");
 puddleImg = loadImage("puddle.png");
 ScooterImg = loadImage("scooter.png");
 immunityImg = loadImage("immunity.png");
 bgImg1 = loadImage("city road.jpg");
}



function setup() {
  createCanvas(1500,750);

  puddle = createSprite(1300, 580, 40, 40);
  puddle.addImage(puddleImg);
  puddle.scale = 0.5;

  Woman = createSprite(300, 450, 40, 40);
  Woman.addAnimation("moving", WomanAni);
  Woman.scale = 0.7;
  
  car = createSprite(200, 550, 40, 40);
  car.addImage(carImg);

  deer = createSprite(200, 600, 40, 40);
  deer.addAnimation("moving", deerAni);
  deer.scale = 1.3;

  Scooter = createSprite(600, 500, 40, 40);
  Scooter.addImage(ScooterImg);

  Branch = createSprite(700, 510, 40, 40);
  Branch.addImage(BranchImg);
  Branch.scale = 0.3;

  Car = createSprite(1000, 600, 40, 40);
  Car.addImage(CarImg);
 
  Man = createSprite(500, 650, 40, 40);
  Man.addAnimation("moving", ManAni);

  man = createSprite(1000, 650, 40, 40);
  man.addAnimation("moving", manAni);

  bike = createSprite(1300, 620, 40, 40);
  bike.addImage(bikeImg);
  bike.scale = 1.5;

  Girl = createSprite(800, 650, 40, 40);
  Girl.addAnimation("moving", GirlAni);

  leaves = createSprite(400, 600, 40, 40);
  leaves.addImage(leavesImg);
  leaves.scale = 0.3;

  immunity = createSprite(50, 300, 40, 40);
  immunity.addImage(immunityImg);
  immunity.scale = 0.8;
}

function draw() {
  background(bgImg1); 

  /*if(frameCount % 2000){
    Car = createSprite(1600, 600, 40, 40);
    Car.addImage(CarImg);
    Car.velocityX = -5;
   // Car.lifetime = 200;
  } 
  if(frameCount % 1000){
    Girl = createSprite(1600, 650, 40, 40);
    Girl.addAnimation("moving", GirlAni);
    Girl.velocityX = -6;
    //Girl.lifetime = 200;
  }
*/
  
  drawSprites();
}
var dog,dog1,dog2;

var database,foodS,foodStock;

function preload()
{
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 800);
  background(46,139,87);
  database=firebase.database();

  
  dog=createSprite(400,400,500,500);
  dog.addImage(dog1);
dog.scale=0.5
  
foodStock=database.ref('food');
foodStock.on("value",readStock);



}

function draw() { 
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    clear();
    background(46,139,87);
    dog.addImage(dog2);
    
    
    }
    





drawSprites();
  textSize(10);
  fill("blue");
  text("Press The Up Arrow Key To Feed The Dog");
}
function readStock(data){
  foodS=data.val();
  }
  function writeStock(x){
  
  
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      food:x
    })
  }



//Create variables here
var dog,happydoggy,foodS=20,foodStock,database,dogImage,happydoggyImage


function preload()
{
	//load images here
   dogImage=loadImage("dog.png");
  happydoggyImage=loadImage("happyDog.png")
}

function setup() {
   database=firebase.database();
   createCanvas(500, 500);
   dog=createSprite(250,250,5,5)
   dog.addImage(dogImage);
   dog.scale=0.3;

   foodStock=database.ref('food');
   foodStock.on("value",readStock);
   
  
  
}




function draw() {  
  background(46, 139, 87)
 if(keyWentDown(UP_ARROW)){
   writeFood(foodS);
   foodS=foodS-1;
   if (foodS<=0){
    foodS=0;
  }
  dog.addImage(happydoggyImage);
 }

  

  

  drawSprites();
  //add styles here
  fill("red")
  textSize(30)
  text("food left:" + foodS , 140 , 140)

}

function readStock(data){
  foodS=20;
}

function writeFood(x){
  
  database.ref('/').update({
  Food:x
  })
}








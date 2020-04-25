var player,ground,invi_ground,tilesGroup,block,blocksGroup;

function setup() {
  createCanvas(1200,500);

  player=createSprite(70,270,10,20);

  ground=createSprite(600,470,2400,20);
  ground.velocityX=-6;
  ground.x=ground.width/2;
  invi_ground=createSprite(600,475,1200,10);
  invi_ground.visible=false;
  tilesGroup=new Group();
  blocksGroup=new Group();
}

function draw(){
  background(0);

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(keyDown("space")&&player.y>300){
    player.velocityY=-12;
  }

  player.velocityY=player.velocityY+0.5;

  player.collide(invi_ground);
  player.collide(blocksGroup);
   player.collide(tilesGroup);
  createTiles();
  createBlocks();
  
  drawSprites();
}

function createTiles(){
  if(frameCount===0 ||frameCount%80===0){
    tiles=createSprite(1200,470,40,20);
   
    var num=Math.round(random(60,250));
    tiles.width=num;
    
    tiles.shapeColor="red";
    tiles.velocityX=ground.velocityX;
   
    tiles.lifetime=1500/-(ground.velocityX);
    
    tilesGroup.add(tiles);
   
  }
}
function createBlocks(){
if( frameCount%120===0){
  console.log("gf");
 block=createSprite(1200,350,40,20);
 var num1=Math.round(random(300,350));
 block.y=num1;
 var num2=Math.round(random(60,250));
    block.width=num2;
  block.velocityX=ground.velocityX;
  block.lifetime=1500/-(ground.velocityX);
   blocksGroup.add(block);
}

}
function preload(){
    harry1=loadImage("harry.png")
    enemyi=loadImage("enemy.png");
    poratol=loadImage("portal.png")
    spearlo=loadImage("spear.png")
}

function setup(){
    createCanvas(610,500)
    
    portal=createSprite(600,450,40,40);
    portal.addImage(poratol)
    portal.scale=0.25
    enemy=createSprite(300,450,40,40);
    enemy.addImage(enemyi)
    enemy.scale=0.15
    harry=createSprite(100,450,40,40);
    harry.addImage(harry1)
    harry.scale=0.25
    spear=createSprite(130,450,40,40);
    spear.addImage(spearlo)
    spear.scale=0.25
}

function draw(){
    background("white")
    harry.velocityX=2;
    spear.velocityX=2;
    if(harry.x===600){
        harry.destroy();
    }
    if(harry.x===300){
        spear.rotation=40;
        enemy.destroy();
    }
    
    drawSprites();
}

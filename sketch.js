var cat,catimg,catimg2,catanm
var mouseimg,mouse,mouseimg2,mouseanm
var bgimg,background
function preload() {
    //load the images here
bgimg=loadImage("images/garden.png")
catimg=loadImage("images/cat1.png")
catimg2=loadAnimation("images/cat2.png","images/cat3.png")
catanm=loadAnimation("images/cat4.png")
mouseimg=loadImage("images/mouse1.png")
mouseimg2=loadAnimation("images/mouse2.png","images/mouse3")
mouseanm=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(850,700,10,10)
cat.addImage("catstill",catimg)
cat.scale=0.2
mouse=createSprite(250,700,10,10)
mouse.addImage("mousestill",mouseimg)
mouse.scale=0.2
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width-mouse.width)/2){
    cat.changeAnimation("catstill2",catimg2)
    cat.velocityX=0
    mouse.changeAnimation("mousestill2",mouseimg2)
}



drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
cat.changeAnimation("catrunning",catanm)
cat.velocityX=-2
mouse.changeAnimation("mousetease",mouseanm)

}

}

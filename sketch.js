var bird,birdimg,btmpillar,btmpillarimg,toppillar,toppillarimg,bg

function preload(){
    birdimg=loadImage("assets/bird.jpg")
    btmpillarimg=loadImage("assets/bottom_pillar.png")
    toppillarimg=loadImage("assets/top_pillar.png")
    bgimg=loadImage("assets/bg.png")
}



function setup(){
    createCanvas(windowWidth,windowHeight)
    
    bg=createSprite(width/2,height/2)
    bg.addImage(bgimg)
    bg.scale=1.8
    bg.velocityX=-10
}


function topPillar(){
    toppillar=createSprite(20,300,20,70)
    toppillar.addImage(toppillarimg)

    }
    
    function btmpillar(){
    
    }


function draw(){
    background("white")
    
if(bg.x<0){bg.x=width/2}
topPillar()

    drawSprites()
}


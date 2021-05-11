var ball;
var database;
var position;

function setup(){
    database = firebase.database();
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "magenta";
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("red");
if(position!==undefined){


    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
 }

function readPosition(data){
    position = data.val()
    if(position!==undefined){
    ball.x = position.x
    ball.y = position.y
    }
}
function writePosition(x,y){
    if(position!==undefined){
    database.ref('ball/position').set({
        'x': position.x+x,
        'y': position.y+y
    })
 }
}
function showError(){
    console.log("AgentXWaseem better than John Wick")
}
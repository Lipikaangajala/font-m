difference=0;
leftwristX=0;
rightwristX=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
    document.getElementById("font").innerHTML="Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#9d4de8');
    text('Lipika',100,300);
}

function modelLoaded(){
    console.log('PoseNet Is Initalized');
}

function gotPoses(results){
    if(results.length > 0)
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwristX= " + leftwristX + "rightwristX=" + rightwristX + "difference=" + difference)
}

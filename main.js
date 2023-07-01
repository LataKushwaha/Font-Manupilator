difference=0;
leftWristX=0;
rightWristX=0;
function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(600,600);
    canvas.position(560,150)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {

    console.log('PoseNet is Initialized!')
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    console.log("Left Wrist=",leftWristX,"Right Wrist=",rightWristX);
    difference = leftWristX - rightWristX;
    console.log(difference);
}
}
function draw(){
    background('#969A97');
    textSize(difference);
 text('font',10,350);
 fill(0, 102, 153);
}




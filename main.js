song="";
leftWristx=0;
leftWristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
    song=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("poseNet modal has been started")
}

function gotposes(results){
    if(results.length>0)
        {
           console.log(results);
           leftWristx=results[0].pose.leftWrist.X;
           leftWristy=results[0].pose.leftWrist.Y;
           console.log("leftWristx " + leftWristx + "leftWristy" + leftWristy);

           rightwristx=results[0].pose.rightwrist.X;
           rightwristy=results[0].pose.rightwrist.Y;
           console.log("rightWristx" + rightwristx + "rightWristy" + rightwristy);
        }
}

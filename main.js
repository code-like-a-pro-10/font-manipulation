noseX = 0;
noseY = 0;
difference = 0;
rightWristx = 0;
leftWristx =0;
    function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('PoseNet Is Initialized! ');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX = ' + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "differnce = " + difference);
    }

}
function draw(){
background('#32a840');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference + "px";
    fill('#111211');
    stroke('#111211');
    square(noseX , noseY , difference);
}




function setup() {
    video = createCapture(500, 550);
    video.size(500, 550);

    canvas = createCanvas(600, 470);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is now initialised');
}

function draw() {
    background("#39e75f")
}

function gotPoses() {
    if(results.length > 0) {
        console.log(results)
    }
}
var som = "";
function preload(){
    som = loadSound("music.mp3");
}
function draw(){
    image(video, 0, 0, 650, 500);
}
function setup(){
    canvas = createCanvas(650, 500);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function iniciar(){
    som.play();
}
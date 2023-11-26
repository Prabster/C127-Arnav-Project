function preload() {
    sound = loadSound("HarryPotter.mp3");
    sound = loadSound("TheAvengers.mp3");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 500);
}

function playMusic() {
    sound.play();
}
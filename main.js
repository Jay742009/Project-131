img = "";

function preload() {
    img = loadImage("Ac.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Clock", 25, 200);
    noFill();
    stroke("red");
    rect(10, 200, 90, 70);
    fill("blue");
    text("Ac", 320, 115);
    noFill();
    stroke("blue");
    rect(280, 100, 300, 100);

}
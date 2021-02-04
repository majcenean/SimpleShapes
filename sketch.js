// ---Simple Shapes by Maj Jenkins
// ---February 4, 2021


// Global variables
var a = 0;
var b = 0;
var speeda = 10;
var speedb = 10;
var t = 0;
var r = 0;

// Full-screen window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    rectMode(CORNER);
    ellipseMode(CENTER);

    print("Width = " + width);
    print("Height = " + height);

    a = width;
    b = 0;

}

function draw() {

    background('#484569');
    noStroke();
    fill('#fff');

    // Variables

    var x = width;
    var y = height;


    // Rectangles Static
    rect(y / 6, y / 4, width / 3.5, 20);
    rect(2 * (x / 3) - 50, 450, 20, y / 5);

    // Triangle Static
    // triangle(x/2 + 200, y/4, x/2 + 50, y/4 + 100, x/2 + 250, y/4 + 100,);

    // Triangles Moving
    fill('#ED225D');
    triangle(102 + t, 116 + r, 56, 51, 24, 67);
    triangle(102 + t, 116 + r, 305, 57, 336, 94);
    triangle(102 + t, 116 + r, 69, 182, 109, 198);
    fill(240);

    textSize(20);
    text("Press the arrow keys &", 1311, 703);
    text("click the mouse", 1311, 725);

    // triangle option
    if (keyIsDown(LEFT_ARROW)) {
        t -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        t += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        r -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        r += 5;
    }


    // Balls
    fill(240);
    // Horizontal
    ellipse(a, 400, 50, 50);
    if (a > (width - 25)) {
        speeda = -20;
    }

    if (a < 2 * (width / 3) && a > (width / 2)) {
        speeda = 10;
    }

    a = a + speeda;

    // Vertical
    ellipse(width / 3, b, 50, 50);

    if (b < 5) {
        speedb = 20;
    }

    if (b > (y / 6)) {
        speedb = -10;
    }

    b = b + speedb;


    // Use this stroke to turn on the vertex finding function, and disable the background
    // stroke('#000');
	fill(255);
    // Cool M A and j, hopefully, with p5 asterisk
    beginShape();
    vertex(248, 610);
    vertex(152, 444);
    vertex(186, 422);
    vertex(263, 455);
    vertex(268, 373);
    vertex(302, 349);
    vertex(420, 513);
    vertex(390, 536);
    vertex(315, 431);
    vertex(298, 500);
    vertex(220, 485);
    vertex(280, 586);
    endShape(CLOSE);

    beginShape();
    vertex(932, 119);
    vertex(973, 99);
    vertex(1038, 223);
    vertex(1041, 269);
    vertex(1010, 312);
    vertex(962, 323);
    vertex(908, 281);
    vertex(885, 245);
    vertex(917, 227);
    vertex(967, 281);
    vertex(997, 267);
    vertex(1000, 235);
    endShape(CLOSE);

    quad(902, 55, 923, 88, 961, 72, 950, 42);

    beginShape();
    vertex(811, 622);
    vertex(767, 472);
    vertex(794, 457);
    vertex(918, 549);
    vertex(897, 570);
    vertex(844, 532);
    vertex(813, 549);
    vertex(842, 608);
    beginContour();
    vertex(799, 496);
    vertex(807, 493);
    vertex(827, 519);
    vertex(811, 528);
    endContour();
    endShape(CLOSE);


    fill('#ED225D');

    beginShape();
    vertex(1296, 500);
    vertex(1327, 513);
    vertex(1312, 561);
    vertex(1364, 576);
    vertex(1363, 605);
    vertex(1309, 599);
    vertex(1318, 650);
    vertex(1286, 659);
    vertex(1266, 605);
    vertex(1221, 620);
    vertex(1211, 585);
    vertex(1259, 570);
    vertex(1226, 518);
    vertex(1251, 511);
    vertex(1279, 542);
    endShape(CLOSE);

    // Cursor
    noCursor();
    textSize(10);
    if (mouseIsPressed) {
        text("by Maj", mouseX, mouseY);
    } else {

        text("Simple Shapes", mouseX, mouseY);
    }


    mouseClicked();

}


// The vertex finding function: make sure to put mouseClicked in the draw function
function mouseClicked() {
    ellipse(mouseX, mouseY, 1, 1);
    print(mouseX, mouseY);
}

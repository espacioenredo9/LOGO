let angle1 = 0, angle2 = Math.PI; // Invert second spiral
let radius1 = 0, radius2 = 0;
let maxRadius1, maxRadius2;
let prevX1, prevY1, prevX2, prevY2;
let wobbleFactor1, wobbleFactor2;
let wobbleSpeed1, wobbleSpeed2;
let wobbleAngle1 = 0, wobbleAngle2 = 0;
let startX1, startY1, startX2, startY2;
let intersectionRadius;

function setup() {
    createCanvas(windowWidth, windowHeight); // Full-screen canvas
    background(255);
    adjustSpiralSettings(); // Dynamically adjust spiral size & position
}

function draw() {
    let dynamicWobble1 = sin(wobbleAngle1) * wobbleFactor1 * sin(angle1 * 0.5);
    let x1 = startX1 + (radius1 + dynamicWobble1) * cos(angle1 + sin(wobbleAngle1) * 0.2);
    let y1 = startY1 + (radius1 + dynamicWobble1) * sin(angle1 + sin(wobbleAngle1) * 0.2);

    let dynamicWobble2 = sin(wobbleAngle2) * wobbleFactor2 * sin(angle2 * 0.5);
    let x2 = startX2 + (radius2 + dynamicWobble2) * cos(angle2 + sin(wobbleAngle2) * 0.2);
    let y2 = startY2 + (radius2 + dynamicWobble2) * sin(angle2 + sin(wobbleAngle2) * 0.2);

    let strokeW1 = random(0.5, 2);
    let strokeW2 = random(0.5, 2);

    stroke(0);
    strokeWeight(strokeW1);
    line(prevX1, prevY1, x1, y1);

    stroke(0);
    strokeWeight(strokeW2);
    line(prevX2, prevY2, x2, y2);

    if (radius1 >= intersectionRadius && radius2 >= intersectionRadius) {
        noLoop();
        return;
    }

    prevX1 = x1;
    prevY1 = y1;
    prevX2 = x2;
    prevY2 = y2;

    angle1 += 0.1;
    radius1 += random(0.1, 0.2);
    wobbleAngle1 += wobbleSpeed1;

    angle2 -= 0.1;
    radius2 += random(0.1, 0.2);
    wobbleAngle2 += wobbleSpeed2;
}

// Resizes canvas and repositions spirals on window resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
    adjustSpiralSettings(); // Recalculate positions & sizes
}

// Function to adjust spiral sizes and positions for any screen size
function adjustSpiralSettings() {
    let minDimension = min(width, height);

    maxRadius1 = random(minDimension * 0.2, minDimension * 0.35);
    maxRadius2 = random(minDimension * 0.2, minDimension * 0.35);

    // Adjust positions dynamically for desktop & mobile
    startX1 = width * 0.33; // One-third of screen width
    startY1 = height * 0.5; // Centered vertically
    startX2 = width * 0.67; // Two-thirds of screen width
    startY2 = height * 0.5; // Centered vertically

    prevX1 = startX1;
    prevY1 = startY1;
    prevX2 = startX2;
    prevY2 = startY2;
}

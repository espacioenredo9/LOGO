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
  createCanvas(1200, 600); // Fixed canvas size
  background(255); // White background
  maxRadius1 = random(150, 350); // Randomize final size for first spiral
  maxRadius2 = random(150, 350); // Randomize final size for second spiral
  startX1 = random(300, 900); // Randomize starting X position
  startY1 = random(150, 450); // Randomize starting Y position
  startX2 = random(300, 900); // Randomize starting X position for second spiral
  startY2 = random(150, 450); // Randomize starting Y position for second spiral
  prevX1 = startX1;
  prevY1 = startY1;
  prevX2 = startX2;
  prevY2 = startY2;
  intersectionRadius = (maxRadius1 + maxRadius2) / 2; // Ensure intersection occurs
  noFill();
  
  wobbleFactor1 = random(2, 6);
  wobbleSpeed1 = random(0.001, 0.005); // Smoother, longer wobble
  wobbleFactor2 = random(2, 6);
  wobbleSpeed2 = random(0.001, 0.005);
}

function draw() {
  let dynamicWobble1 = sin(wobbleAngle1) * wobbleFactor1 * sin(angle1 * 0.5);
  let x1 = startX1 + (radius1 + dynamicWobble1) * cos(angle1 + sin(wobbleAngle1) * 0.2);
  let y1 = startY1 + (radius1 + dynamicWobble1) * sin(angle1 + sin(wobbleAngle1) * 0.2);
  
  let dynamicWobble2 = sin(wobbleAngle2) * wobbleFactor2 * sin(angle2 * 0.5);
  let x2 = startX2 + (radius2 + dynamicWobble2) * cos(angle2 + sin(wobbleAngle2) * 0.2);
  let y2 = startY2 + (radius2 + dynamicWobble2) * sin(angle2 + sin(wobbleAngle2) * 0.2);
  
  let strokeW1 = random(0.5, 2); // Randomized stroke weight within reduced range
  let strokeW2 = random(0.5, 2);
  
  stroke(0); // Black lines
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
  radius1 += random(0.1, 0.2); // Randomizing radius increment for self-intersection
  wobbleAngle1 += wobbleSpeed1;
  
  angle2 -= 0.1;
  radius2 += random(0.1, 0.2); // Randomizing radius increment for self-intersection
  wobbleAngle2 += wobbleSpeed2;
}

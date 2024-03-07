let typesNum = 5;
let pallete = ["red", "limegreen", "cyan", "yellow", "pink"];
let loveHateMatrix;

let particles;
let particlesNum = 500;
let minEye = 30;
let maxEye = 100;
let speedLimit = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //fullscreen();
  particles = new Particles();
  noStroke();
  rectMode(CENTER);
};

function draw(){
  background(20);
  loveHateMatrix = updateloveHateMatrix();
  with (particles) {
    interact();
    calc();
    wrap();
    show();
  }
};

function updateloveHateMatrix(){
  let array = [];
  for (let j = 0; j < typesNum; j++) {
    array[j] = [];
    for (let i = 0; i < typesNum; i++) {
      array[j][i] = sin(100 * noise(i, j, frameCount / 3e3));
    }
  }
  return array;
};

let Particle = (type) => ({
  pos: createVector(random(width), random(height)),
  vel: createVector(0, 0),
  acc: createVector(0, 0),
  type: type,
});



// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  } 
}
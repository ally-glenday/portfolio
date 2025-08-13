// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = []

function setup() {
/* Stackoverflow code */ 
    // const myCanvas = createCanvas(500, 500);
    myCanvas.parent("p5-sketch");

    // myCanvas.style('z-index', '-1');
/* Stackoverflow code */ 

//   createCanvas(600, 600);
  colorMode(HSB);
  for (i = 0; i < 15; i++) blobs.push(new Blob(random(0, width), random(0, height)));
}

function draw() {
  background(0);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 30 * blobs[i].r / d;
      }
      set(x, y, color(sum, 50, 100));
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}
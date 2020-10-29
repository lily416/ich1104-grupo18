let 
  detailR1,   // Radio interno del toroide
  detailR2;   // Radio del tubo del anillo

function setup() {
  createCanvas(500, 300, WEBGL);
  
  detailR1 = createSlider(60, 100, 100);
  detailR1.position(width + 20, 20);
  detailR1.style('width', '80px');  
  
  detailR2 = createSlider(10, 30, 30);
  detailR2.position(width + 20, 40);
  detailR2.style('width', '80px');  
  
}

function draw() {
  background(205, 102, 94);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(detailR1.value(), detailR2.value());
  
}
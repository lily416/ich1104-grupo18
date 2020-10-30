let 
  render,     // Canvas
  detailR1,   // Radio interno del toroide
  detailR2,   // Radio del tubo del anillo
  div1,       // Texto R1
  div2,       // Texto R2
  btn1,       // Botón inicio
  btn2;       // Botón reinicio

let x = 0,
    v = 0;


function setup() {
  render = createCanvas(windowWidth, 300, WEBGL);
  render.parent("vortex");

  div1 = createDiv('Parámetro 1');
  div1.class('p');
  div1.style('color', 'black');
  div1.parent('sliders')

  detailR1 = createSlider(60, 100, 100);
  detailR1.parent('sliders');  

  div2 = createDiv('Parámetro 2');
  div2.class('p');
  div2.style('color', 'black');
  div2.parent('sliders');  

  detailR2 = createSlider(10, 30, 30);  
  detailR2.parent('sliders');  

  btn1 = createButton('Iniciar simulación');
  btn1.parent('sliders');
  btn1.mousePressed(startSimulation)
  
  btn2 = createButton('Reiniciar simulación');
  btn2.parent('sliders');
  btn2.mousePressed(resetSimulation)

}

function draw() {
  background(205, 102, 94);
  
  if (v === 0) { 
    rotateY(millis() / 1000);
   } else {
    rotateY(PI / 2.0);
   };

  x += v;
  translate(0, 0, x);

  torus(detailR1.value(), detailR2.value());
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}

function startSimulation() {
  x = - width / 2;
  v = 0.8;
}

function resetSimulation() {
  x = 0;
  v = 0;
}
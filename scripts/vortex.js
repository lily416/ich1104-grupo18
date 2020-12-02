let 
  render,           // Canvas
  div1, detailR1,   // Radio interno del toroide
  div2, detailR2,   // Radio del tubo del anillo
  divV, detailV,    // Velocidad de movimiento
  btnS,             // Botón inicio
  btnR;             // Botón reinicio

let x = 0,          // Posición del toroide en x
    start = false;  // Simulación iniciada

function setup() {
  render = createCanvas(windowWidth, 300, WEBGL);
  render.parent("vortex");

  div1 = createDiv('Parámetro 1');
  div1.class('p');
  div1.style('color', 'black');
  div1.parent('sliders');

  detailR1 = createSlider(60, 100, 100);
  detailR1.parent('sliders');  

  div2 = createDiv('Parámetro 2');
  div2.class('p');
  div2.style('color', 'black');
  div2.parent('sliders');  

  detailR2 = createSlider(10, 30, 30);  
  detailR2.parent('sliders');  

  divV = createDiv('Velocidad');
  divV.class('p');
  divV.style('color', 'black');
  divV.parent('sliders');  

  detailV = createSlider(0, 15, 1.5);  
  detailV.parent('sliders');  

  btnS = createButton('Iniciar simulación');
  btnS.parent('sliders');
  btnS.mousePressed(startSimulation);
  
  btnR = createButton('Reiniciar simulación');
  btnR.parent('sliders');
  btnR.mousePressed(resetSimulation);
}

function draw() {
  background(205, 102, 94);
  
  if (start) {
    x += detailV.value();
    translate(x, 0, 0);
    rotateY(PI / 2.0);

    if (x > windowWidth) {
      x = - width / 2 -10;
    }

  } else {
    rotateY(millis() / 1000);
  }

  torus(detailR1.value(), detailR2.value());
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}

function startSimulation() {
  x = - width / 2 - 10;
  start = true;
}

function resetSimulation() {
  x = 0;
  start = false;
}
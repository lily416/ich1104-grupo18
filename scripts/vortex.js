let 
  render,               // Canvas
  div1, detailR, valR,  // Radio interno del toroide
  divk, detailK, valK,  // Circulación del vortice
  divV, valV,           // Velocidad
  btnS,                 // Botón inicio
  btnR;                 // Botón reinicio

let x = 0,              // Posición del toroide en x
    start = false;      // Simulación iniciada

function setup() {
  render = createCanvas(windowWidth, 300, WEBGL);
  render.parent("vortex");

  // ----------------------------------------------------------------

  div1 = createDiv('Radio del vórtice');
  div1.class('p');
  div1.style('color', 'black');
  div1.parent('sliders');
  
  valR = createDiv('100');
  valR.class('p');
  valR.style('color', 'black');
  valR.parent('sliders');
  valR.id('valR');

  detailR = createSlider(60, 100, 100);
  detailR.parent('sliders');  

  // ----------------------------------------------------------------

  divK = createDiv('Circulación del vórtice');
  divK.class('p');
  divK.style('color', 'black');
  divK.parent('sliders');  

  valK = createDiv('5000');
  valK.class('p');
  valK.style('color', 'black');
  valK.parent('sliders');
  valK.id('valK');

  detailK = createSlider(1000, 9999, 5000);  
  detailK.parent('sliders');

  // ----------------------------------------------------------------

  divV = createDiv('Velocidad del vórtice');
  divV.class('p');
  divV.style('color', 'black');
  divV.parent('sliders');

  valV = createDiv('V: 0');
  valV.class('p');
  valV.style('color', 'black');
  valV.parent('sliders');
  valV.id('valV')

  // ----------------------------------------------------------------

  btnS = createButton('Iniciar simulación');
  btnS.parent('buttons');
  btnS.mousePressed(startSimulation);
  
  btnR = createButton('Reiniciar simulación');
  btnR.parent('buttons');
  btnR.mousePressed(resetSimulation);
}

function draw() {
  background(205, 102, 94);

  k = detailK.value();
  R = detailR.value();
  r = R * .15;

  v = k / (2 * Math.PI * R)

  valR = document.querySelector('#valR');
  valR.textContent = "R: " + R;
  
  valK = document.querySelector('#valK');
  valK.textContent = "k: " + k;
  
  valV = document.querySelector('#valV');
  valV.textContent = "V: " + v.toFixed(2);
  
  if (start) {
    x += v;
    translate(x, 0, 0);
    rotateY(PI / 2.0);

    if (x > windowWidth) {
      x = - width / 2 -10;
    }

  } else {
    rotateY(millis() / 1000);
  }

  torus(R, r);
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
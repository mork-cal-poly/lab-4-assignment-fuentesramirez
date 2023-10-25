let showMagikarp = false;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("canvas-parent");
}

function draw() {
  push();
  translate(0, 0);
  background(220);
  drawbackground(0, 0);
  drawbackground(0, 300);
  fill(78, 212, 255, 175);
  rect(0, 0, 800, 800);
  drawMagikarp(0, 50, 0.5);
  drawMagikarp(600, 550, 0.5);
  drawMagikarp(0, 550, 0.5);
  drawMagikarp(600, 50, 0.5);
  if (showMagikarp) {
    drawMagikarp(200, 200, 1);
  } else {
    drawGyrados(-40, 0, 2.2);
  }
  pop();
}

function drawbackground(x, y) {
  push();
  translate(x, y);
  fill(25, 100, 150);
  noStroke();
  rect(0, 100, 800, 40);
  rect(0, 200, 800, 40);
  rect(0, 300, 800, 40);
  pop();
}

function drawMagikarp(x, y, s) {
  push();
  let a = color(250, 218, 1); //yellow
  let b = color(246, 133, 24); //orange
  let c = color(7, 7, 7); //black
  let d = color(255, 255, 255); //white
  let e = color(224, 105, 126); //pinkish
  let f = color(185, 16, 16); //red
  let g = color(81, 190, 255); //light bluex
  translate(x, y);
  scale(s);
  //top fin
  fill(a);
  triangle(235, 310, 235, 360, 175, 310);
  triangle(165, 310, 165, 360, 225, 310);
  triangle(200, 380, 235, 310, 165, 310);

  //bottom fin
  triangle(165, 100, 165, 50, 225, 100);
  triangle(235, 100, 235, 50, 175, 100);
  triangle(165, 100, 200, 30, 235, 100);

  //side fins
  fill(b);
  triangle(10, 70, 150, 175, 280, 210);
  triangle(390, 70, 300, 155, 200, 180);
  fill(d);
  triangle(20, 290, 155, 235, 60, 235);
  triangle(55, 235, 30, 210, 55, 195);
  triangle(250, 240, 340, 210, 380, 310);
  triangle(350, 235, 375, 210, 350, 195);
  triangle(390, 70, 350, 195, 210, 210);
  triangle(10, 70, 180, 200, 55, 200);
  rect(265, 195, 85, 40);
  rect(55, 195, 85, 40);
  line(350, 215, 55, 215);

  //face
  fill(b);
  ellipse(200, 200, 140, 255);
  fill(d);
  ellipse(150, 150, 50, 90);
  ellipse(250, 150, 50, 90);
  fill(e);
  ellipse(200, 225, 40, 100);
  fill(f);
  ellipse(200, 225, 20, 70);
  fill(c);
  fill(a);
  ellipse(150, 275, 10, 140);
  ellipse(250, 275, 10, 140);

  //eyes
  fill(c);
  ellipse(250, 150, 10, 30);
  ellipse(150, 150, 10, 30);

  pop();
}

function drawGyrados(x, y, s, a) {
  push();
  let l = color(21, 37, 189); //dark blue
  let m = color(0, 175, 255); //light blue
  let n = color(216, 0, 0);
  let o = color(240, 198, 146);
  let p = color(255, 67, 106);
  let q = color(128, 233, 255);
  translate(x, y);
  scale(s);

  //body
  fill(m);
  ellipse(200, 150, 100);
  rect(150, 125, 100, 58);
  beginShape();
  curveVertex(220, 210);
  curveVertex(255, 255);
  curveVertex(270, 265);
  curveVertex(290, 265);
  curveVertex(290, 250);
  curveVertex(285, 252);
  curveVertex(272, 255);
  endShape(CLOSE);
  beginShape();
  curveVertex(180, 210);
  curveVertex(145, 255);
  curveVertex(130, 265);
  curveVertex(110, 265);
  curveVertex(110, 250);
  curveVertex(115, 252);
  curveVertex(128, 255);
  endShape(CLOSE);

  //eyes
  fill(255);
  triangle(200, 160, 160, 150, 150, 125);
  triangle(200, 160, 240, 150, 250, 125);
  fill(n);
  ellipse(185, 149, 20);
  ellipse(215, 149, 20);
  fill(0);
  ellipse(185, 151, 10);
  ellipse(215, 151, 10);
  fill(l);
  triangle(190, 150, 200, 50, 210, 150);
  triangle(100, 100, 195, 160, 195, 140);
  triangle(300, 100, 205, 160, 205, 140);
  ellipse(200, 150, 25);

  //fins
  fill(q);
  triangle(300, 250, 290, 225, 200, 200);
  triangle(300, 205, 290, 225, 200, 200);
  triangle(315, 150, 300, 205, 200, 200);
  triangle(100, 250, 110, 225, 200, 200);
  triangle(100, 205, 110, 225, 200, 200);
  triangle(85, 150, 100, 205, 200, 200);

  //MOUTH
  fill(0);
  ellipse(190, 165, 7, 3);
  ellipse(210, 165, 7, 3);
  fill(o);
  beginShape();
  curveVertex(165, 170);
  curveVertex(200, 175);
  curveVertex(235, 170);
  curveVertex(235, 255);
  curveVertex(200, 255);
  curveVertex(165, 255);
  curveVertex(166, 200);
  endShape(CLOSE);
  fill(0);
  beginShape();
  curveVertex(172, 175);
  curveVertex(200, 182);
  curveVertex(230, 175);
  curveVertex(230, 245);
  curveVertex(200, 245);
  curveVertex(173, 245);
  endShape(CLOSE);
  beginShape();
  fill(p);
  curveVertex(174, 230);
  curveVertex(174, 200);
  curveVertex(226, 200);
  curveVertex(226, 230);
  curveVertex(200, 245);
  endShape(CLOSE);
  fill(255);
  beginShape();
  curveVertex(220, 173);
  curveVertex(230, 170);
  curveVertex(230, 190);
  endShape(CLOSE);
  beginShape();
  curveVertex(185, 176);
  curveVertex(173, 175);
  curveVertex(173, 195);
  endShape(CLOSE);
  beginShape();
  curveVertex(185, 250);
  curveVertex(173, 253);
  curveVertex(173, 235);
  endShape(CLOSE);
  beginShape();
  curveVertex(215, 250);
  curveVertex(228, 253);
  curveVertex(230, 235);
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  showMagikarp = !showMagikarp;
}

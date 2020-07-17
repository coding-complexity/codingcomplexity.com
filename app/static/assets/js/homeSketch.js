let particles = [];
let distanceThresh = 80;
let numParticles = 100;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    let a = random()*TAU;
    
    this.velx = cos(a);
    this.vely = sin(a);
  }
  
  update() {
    this.x += this.velx;
    this.y += this.vely;
    
    if (this.x < 0 || this.x > width) this.velx *= -1;
    if (this.y < 0 || this.y > height) this.vely *= -1;
    
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
  
  renderConnections() {
    for (let i = 0; i < particles.length-1; i++) {
      let p = particles[i];
      let distance = dist(this.x, this.y, p.x, p.y);
      
      if (distance < distanceThresh) {
        let amt = distance/distanceThresh;
        stroke(amt * 0.32 + 0.3, 1, 1);
        line(this.x, this.y, p.x, p.y);
      }
    }
  }
  
  renderPoints() {
    ellipse(this.x, this.y, 3, 3); 
  }
}

function setup() {
    let b = document.getElementById("scene");
    let w = b.clientWidth;
    let h = b.clientHeight;
    createCanvas(w, h);
    console.log("width", w);
    console.log("height", h);
  colorMode(HSB, 1, 1, 1); // hue, saturation, balance
  
  for (let i=0; i<numParticles; i++) {
     particles.push(
       new Particle(
         random(width),
         random(height)
     )
    ); 
  }
}

function drawStars() {
  stroke(0.2);
  for (let i = 0; i < 200; i++) {
    point(random(width), random(height));
     
  }
}

function draw() {
  blendMode(BLEND);
  background(0, 0.15);
  blendMode(ADD);
  for (let i = 0; i < particles.length-1; i++) {
    let p = particles[i];
    p.update();
    p.renderConnections();
    // p.renderPoints();
  }
  
  drawStars();
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight); 
}
  
// Setup Of canvash P5.js
function setup() {
     var element = document.getElementById('scene');
     if(window.screen.height <= 550){
          height = 250
     }else {
          height = 420
     }
     width = element.offsetWidth;
     canvas = createCanvas(width,height);
     pixelDensity(1);
     canvas.parent('scene');
}


// Draw Function without no loop
function draw(){
     noLoop();
     ctx = canvas.drawingContext,
     particles = [],
     amount = 0,
     mouse = {x:0,y:0},
     radius = 1;
     var sketchText = document.querySelector("#SketchText");

     function initScene(){
          ww = canvas.width
          wh = canvas.height
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.font = "bold "+(ww/5.5)+"px sans-serif";
          ctx.textAlign = "center";
          lines = sketchText.value.split(' ')
          i = 2
          for (var j=0; j<lines.length; j++){
               ctx.fillText(lines[j] , ww/2, wh/(i*1.2) )
               i = i-1
          }
          var data  = ctx.getImageData(0, 0, ww, wh).data;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = "screen";

          particles = [];
          for(var i=0;i<ww;i+=Math.round(ww/150)){
            for(var j=0;j<wh;j+=Math.round(ww/150)){
                if(data[ ((i + j*ww)*4) + 3] > 150){
                    particles.push(new Particle(i,j));
                }
            }
          }
          amount = particles.length;
     }

     function render(a) {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < amount; i++) {
            particles[i].render();
        }
     };

     window.addEventListener("resize", initScene);
     initScene();
     requestAnimationFrame(render);
}

// create Partical code
function Particle(x,y){
     ww = canvas.width
     wh = canvas.height
     var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];
     this.x =  Math.random()*ww;
     this.y =  Math.random()*wh;
     this.dest = {
          x : x,
          y: y
     };
     this.r =  Math.random()*5 + 2;
     this.vx = (Math.random()-0.5)*20;
     this.vy = (Math.random()-0.5)*20;
     this.accX = 0;
     this.accY = 0;
     this.friction = Math.random()*0.05 + 0.94;
     this.color = colors[Math.floor(Math.random()*6)];
}

// Partical render function
Particle.prototype.render = function() {
     this.accX = (this.dest.x - this.x)/1000;
     this.accY = (this.dest.y - this.y)/1000;
     this.vx += this.accX;
     this.vy += this.accY;
     this.vx *= this.friction;
     this.vy *= this.friction;

     this.x += this.vx;
     this.y +=  this.vy;

     ctx.fillStyle = this.color;
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
     ctx.fill();

     var a = this.x - mouse.x;
     var b = this.y - mouse.y;
     var distance = Math.sqrt( a*a + b*b );
     if(distance<(radius*70)){
          this.accX = (this.x - mouse.x)/100;
          this.accY = (this.y - mouse.y)/100;
          this.vx += this.accX;
          this.vy += this.accY;
     }
}

// P5.js Mouse Moved Event
function mouseMoved(e) {
     mouse.x = e.clientX;
     mouse.y = e.clientY;
}

// P5.js touch Moved event
function touchMoved(e){
     if(e.touches.length > 0 ){
          mouse.x = e.touches[0].clientX;
          mouse.y = e.touches[0].clientY;
     }
}

// p5.js Touch Event
function touchEnded(e){
     mouse.x = -9999;
     mouse.y = -9999;
}

// Mouse clicked event
function mouseClicked(){
     radius++;
     if(radius ===5){
         radius = 0;
     }
}

// Canvas Resize Event
function windowResized() {
     var element = document.getElementById('scene');
     if(window.screen.height <= 550){
          height = 250
     }else {
          height = 420
     }
     width = element.offsetWidth;
  resizeCanvas(width, height);
}

const sketch = (p) => {
  p.x = 100;
  p.y = 100;
  console.log('p5 initiate');
  
  p.setup = function() {
    var b = document.getElementById('scene');
    
    if (window.screen.height <= 550) {
      var _height = 250;
    } else {
      var _height = 420;
    }

    let _width = b.clientWidth;
    // let h = b.clientHeight;
    
    console.log("width", _width, "height", _height);
    console.log("b.offsetWidth", b.offsetWidth);

    var renderer = p.createCanvas(_width, _height);
    renderer.parent('scene');
    
    p.x = p.width/2;
    p.y = p.height/2;
    p.background(255);

    console.log("p.x", p.x);
    console.log("p.y", p.y);
    
  }
  
  p.draw = function() {
    p.fill(255, 255, 0, 23);
  //   p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 68, 68);

  //   p.x = p.x + p.random(-15, 15);
  //   p.y = p.y + p.random(-15, 15);
  }

  p.mouseClicked = function() {

      var newX = p.mouseX;
      var newY = p.mouseY;
      console.log("clicky");
      console.log("newX", newX);
      console.log("newY", newY);
      
              
      p.ellipse(p.mouseX, p.mouseY, 100, 100);
  }

  // p.edges = function() {
  //     if (p.x > p.width) {
  //         p.x *= -1;
  //     } else {
  //         if (p.y > p.height) {
  //             p.y *= -1;
  //         }
  //     }
  // }

  p.windowResized = function() {
    
    var b = document.getElementById('scene');

    if (window.screen.height <= 550) {
      var _height = 250;
    } else {
      var _height = 420;
    }

    var _width = b.clientWidth;
    p.resizeCanvas(_width, _height);
    p.background(255);
  }
}

new p5(sketch, 'scene');
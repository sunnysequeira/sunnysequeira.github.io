function setup() {
    createCanvas(windowWidth, windowHeight)
    s1 = createSlider(1, 150, 5, 1).position([20], [800])
    p1 = createP('slow it downnn').position(20, 768)
    
  angleMode(DEGREES)
  rectMode(CENTER)
  
  }
   
  function draw() {
    background(120, 90, 35)
    noFill()
    stroke(250)
   
    translate(width / 2, height / 2)
   
    for (var i = 0; i < s1.value(); i++) {
      push()
      
      rotate(sin(frameCount + i) * 100)
      
        rect(0, 0, 400 - i * 3, 600 - i * 3, 200 - i)
      
      pop()
      
    }
   
    rect(0, 0, 600, 600, 200)
  }  
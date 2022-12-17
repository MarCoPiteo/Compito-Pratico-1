let l = 60

let x = 5
let y = l/2

let w = l*10
let h = 600

let b = 0

function setup() {
  createCanvas(w, h);
  background(230,125,0);
}

function draw() {
  let ry = random(-5, 5)
  let ry2 = random(-5, 5)
  let b = random(100, 255)
  //let alfa = random()

  stroke(0, 0, b)
  strokeWeight(3)
  line(x, y+ry, x+l-5, y+ry2)

  x += l

  if (x >= w) {
    x = 0
    y += l
  }

  lineWeightValue.innerHTML = `Dimensione: ${l}`
}

function clean() {
  background(230,125,0);

  y = l/2
  x = 0
}

let dimInput = document.querySelector("[name=dimensione]")
dimInput.value = l

dimInput.addEventListener("input", function(e){
  console.log(`dimensione changed -> ${dimInput.value}`)
  l = parseFloat(dimInput.value)
  console.log(l)
  clean()
})

let lineWeightValue = document.querySelector("#lineWeightValue")
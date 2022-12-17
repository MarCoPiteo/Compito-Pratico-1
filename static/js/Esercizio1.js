let w = 600
let h = 600

let x = 0 
let y = 0

let l = 30

function setup() {
  createCanvas(w, h);
  background(255,0,0);
}

function draw() {
  let r = random()

  if (r < 0.5) {
    line(x, y+l, x+l, y)
  } else if (r > 0.5) {
    line(x, y, x+l, y+l)
  }

  x += l

  if (x == w) {
    y += l
    x = 0
  }

  lineWeightValue.innerHTML = `Dimensione: ${l}`

}

function clean() {
  background(255,0,0);
  x = 0
  y = 0
}

let dimInput = document.querySelector("[name=dimensione]")
dimInput.value = l

dimInput.addEventListener("input", function(e){
  //console.log(`dimensione changed -> ${dimInput.value}`)
  l = parseFloat(dimInput.value)
  console.log(l)
  clean()
})

let lineWeightValue = document.querySelector("#lineWeightValue")
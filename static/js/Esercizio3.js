let l = 60
let d = l/2

let w = l*15
let h = l*15

let x = 0
let y = 0

function setup() {
  createCanvas(w, h);
  background(255,0,0);
}

function draw() {
	r = random()

	if (r < 0.5) {
		fill(255, 255, 0)
		square(x, y, l)

		fill(255, 0, 0)
		circle(x+l/2, y+l/2, d)
	} else if (r > 0.5) {
		fill(255, 255, 0)
		circle(x+l/2, y+l/2, d)
	}

	x += l

	if(x >= w) {
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
	console.log(`dimensione changed -> ${dimInput.value}`)
	l = parseFloat(dimInput.value)
	d = l/2
	console.log(l)
	clean()
})

let lineWeightValue = document.querySelector("#lineWeightValue")

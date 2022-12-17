let w = 600
let h = 600

let d = 30
let l = 60

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
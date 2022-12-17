let l = 100

let w = 600
let h = 600

let x = 0
let y = 0


function setup() {
  createCanvas(w, h);
  background(255,0,0);
}

function draw() {
	r = random(0, 4)

	if (r < 1) {
		fill("white")
		triangle(x, y, x+l, y, x, y+l)

		fill("black")
		triangle(x+l, y, x+l, y+l, x, y+l)
	} else if (r > 1 && r <2) {
		fill("black")
		triangle(x, y, x, y+l, x+l, y+l)
		
		fill("white")
		triangle(x, y, x+l, y, x+l, y+l)
	} else if (r > 2 && r < 3) {
		fill("black")
		triangle(x, y, x+l, y, x, y+l)

		fill("white")
		triangle(x+l, y, x+l, y+l, x, y+l)
	} else if (r > 3 && r < 4) {
		fill("white")
		triangle(x, y, x, y+l, x+l, y+l)

		fill("black")
		triangle(x, y, x+l, y, x+l, y+l)
	} 

	x = x+l

	if(x >= w) {
		y = y+l

		x = 0
	}

  lineWeightValue.innerHTML = `Dimensione: ${l}`
}

function clean() {
  background(255,0,0);
	x = 0
	y = 0
}

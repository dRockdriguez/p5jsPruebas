let points = [];

let x, y;
let previous;
let distance = 0.3;
let n = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	points = [];
	for (let i = 0; i < n; i ++) {
		let angle = i * TWO_PI / n;
		let v = p5.Vector.fromAngle(angle);
		v.mult(300);
		v.add(width/2, height/2);
		points.push(v);
	}
	background(0);
	reset();
}

function reset() {
	current = createVector(random(width), random(height));

	for (let p of points) {
		// point(p.x, p.y);
	}
}

function draw() {
	if (frameCount % 400 === 0) {
		// reset();
	}
	strokeWeight(0.1);
	for (let i = 0; i < 1000; i ++) {
		stroke(random(255), random(255), random(255), 50);
		let next = random(points);
		if (next !== previous) {			
			current.x = lerp(next.x, current.x, distance);
			current.y = lerp(next.y, current.y, distance);
			point(current.x, current.y);
		}
		
		previous = next;
		
		
	}
}
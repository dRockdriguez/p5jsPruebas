let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	arr[0] = width / 2;
	arr[1] = 0;
	arr[2] = 0;
	arr[3] = height;
	arr[4] = width;
	arr[5] = height;
	
	arr[6] = random(width);
	arr[7] = random(height);
	
	arr[8] = width / 2;
	arr[9] = height;
	arr[10] = 0;
	arr[11] = 0;
	arr[12] = width;
	arr[13] = 0;

	background(0);
	stroke(255);
}

function draw() {
	strokeWeight(1);
	for (let i = 0; i < 100; i ++) {
		point(arr[6], arr[7]);
		let r = floor(random(6));

		let distance = 0.5;
		if (r === 0) {
			stroke(255, 0, 255);
			arr[6] = lerp(arr[6], arr[0], distance);
			arr[7] = lerp(arr[7], arr[1], distance);
		} else if (r === 1) {
			stroke(255, 255, 0);
			arr[6] = lerp(arr[6], arr[2], distance);
			arr[7] = lerp(arr[7], arr[3], distance);
		} else if (r === 2) {
			stroke(0, 255, 255);
			arr[6] = lerp(arr[6], arr[4], distance);
			arr[7] = lerp(arr[7], arr[5], distance);
		} /*else if (r === 3) {
			stroke(200, 5, 25);
			arr[6] = lerp(arr[6], arr[8], distance);
			arr[7] = lerp(arr[7], arr[9], distance);
		} else if (r === 4) {
			stroke(0, 25, 122);
			arr[6] = lerp(arr[6], arr[10], distance);
			arr[7] = lerp(arr[7], arr[11], distance);
		} else if (r === 5) {
			stroke(101, 111, 255);
			arr[6] = lerp(arr[6], arr[12], distance);
			arr[7] = lerp(arr[7], arr[13], distance);
		}*/
		
	}
}
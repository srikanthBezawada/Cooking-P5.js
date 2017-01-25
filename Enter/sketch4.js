// Magic circle, call it magic, coldplay

var circleX;

function setup() {
	createCanvas(600, 400);
	circleX = 50
}

function draw() {
	if(circleX > 600) {
		circleX = circleX = 50;
	}
	background(250, 250, 100);
	fill(250, 200, 200);
	ellipse(circleX, 200, 200, 80);
	circleX = circleX + 50;	
}
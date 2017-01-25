// Using javascript objects, grouping variables, same as sketch4

var circle = {
	x: 0,
	y: 200,
	diameter: 50
};

var r = 218;
var g = 160;
var b = 221;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	if(circle.x > 600) {
		circle.x = 0;
	}
	background(r, g, b);
	fill(250, 200, 200);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter)
	circle.x = circle.x + 1;
}
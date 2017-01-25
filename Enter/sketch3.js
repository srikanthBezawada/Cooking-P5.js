// A simple paint canvas and mouseclick to erase

function setup() {
	createCanvas(600, 400);
	background(250, 250, 100); // Change this background to the starting of the draw() function and see what happens
}

function draw() {
	noStroke();
	fill(250, 200, 200, 50);
	ellipse(mouseX, mouseY, 25, 25);
	
	//fill(200, 250, 200);
	//rect(400, 100, 50, 50);
}


function mousePressed() { // execute when the mouse is pressed,
	//yes, in that event of pressing take a break from draw() and execute here
	background(250, 250, 100);// Erase the drawing
}
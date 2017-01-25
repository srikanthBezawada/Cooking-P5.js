// A simple alien

function setup() {
	createCanvas(480, 270);
	
}

function draw() {
	// Hey, did you know that draw() function is called continuously ?
	background(255);
	
	ellipseMode(CENTER)
	rectMode(CENTER);
	
	// Body
	fill(255, 0, 0)
	rect(240, 145, 20, 100);
	
	// Head
	fill(0, 0, 255)// fill(0, 0, 255, 100)  Fourth argument for transparency
	ellipse(240, 115, 60, 60);
	
	fill(0, 255, 0)
	// Eyes
	ellipse(221, 115, 16, 32);
	ellipse(259, 115, 16, 32);
	
	// Legs
	line(230, 195, 220, 205);
	line(250, 195, 260, 205);
	
	//	background(255);
	//  Order is important, like stack, so don't uncomment above line. Same goes with drawing as well as fill and stroke
}
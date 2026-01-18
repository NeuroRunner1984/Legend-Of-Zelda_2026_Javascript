const canvas = document.getElementById("gameScreen"); 

const c = canvas.getContext("2d");
console.log("Context: ", c);

c.beginPath();
c.fillStyle = "red"; 
c.fillRect(0, 0, 60, 10); 
c.Stroke(); 

class Game {
	constructor() {
		this.player = undefined; 
	}
	initialize = () => {

	}
	updaate = () => {

	}

	render = () => {

	}
}
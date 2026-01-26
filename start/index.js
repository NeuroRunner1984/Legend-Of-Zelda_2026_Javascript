import Registry from "./classes/Registry.js";

export const canvas = document.getElementById("gameScreen"); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

export const c = canvas.getContext("2d");


c.beginPath();
c.fillStyle = "red"; 
c.fillRect(0, 0, 60, 10); 
c.stroke(); 

class Game {
	constructor() {
		this.player = undefined; 
			this.registry = new Registry();
		
	}
	initialize = () => {
		this.player = {
			x: 0,
			y:0,
			height: 50,
			width: 60,
		}

		this.registry.addSystem("MovementSystem");
		this.registry.addSystem("RenderSystem");

		const dummyPositionComponent = {
			name: "Position",
			value: {
				x: 0,
				y: 0,
				height: 50,
				windth: 50
			} 

		}

		const dummyMovementComponent = {
			name: "Movement",
			value: {
				vX: 10,
				vY: 10
			}
		}; 


		const entity = this.registry.createEntity([dummyMovementComponent, dummyPositionComponent]);

		//console.log(this.registry.entitiesToBeAdded);

		this.registry.addEntityToSystem(entity)

		console.log(this.registry.systems);

		document.addEventListener("keyup", this.handleUserInput);
		document.addEventListener("keydown", this.handleUserInput);

	}
	update = () => {
		
		this.registry.getSystem("MovementSystem").update();
		this.registry.getSystem("RenderSystem").update();
		requestAnimationFrame(this.update);

	}

	render = () => {
		
	requestAnimationFrame(this.render);
	}

	handleUserInput = (e) => {
		/* 
	{
		key: string
		type: string}}*/

		const {key, type} = e; 

		if (this.player) {
			if(type === "keydown") {

				switch(key) {
					case "w":
						this.player.y -= 1; 
					break; 
					case "a":
						this.player.x -= 1;
					break;
					case "s":
						this.player.y += 1; 
					break;
					case "d":
						this.player.x += 1; 
					break;
					default:
						break; 
				}

			}

		}
	} 
}


const game = new Game(); 
game.initialize();
game.update();
game.render(); 

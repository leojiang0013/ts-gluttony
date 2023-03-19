import "./style/index.less";
import Food from "./modules/Food";
import ScorePanel from "./modules/ScorePanel";
import Snake from "./modules/Snake";

class GameControl {
	snake: Snake;
	food: Food;
	scorePanel: ScorePanel;
	direction: number = 39;
	live: boolean = true;
	constructor() {
		this.snake = new Snake();
		this.food = new Food();
		this.scorePanel = new ScorePanel();
		this.init();
	}

	init() {
		document.addEventListener("keydown", this.HandleKeyDown.bind(this));
		this.run();
	}

    HandleKeyDown(event: any) {
        if (event.keyCode === 37 || 38 || 39 || 40) {
            this.direction = event.keyCode;
        }
	}

	run() {
		let X = this.snake.X;
		let Y = this.snake.Y;
		const level: number = this.scorePanel.level;
		let time = 1000;
		switch (this.direction) {
			case 38:
				Y -= 10;
				break;
			case 40:
				Y += 10;
				break;
			case 37:
				X -= 10;
				break;
			case 39:
				X += 10;
				break;
		}

		switch (level) {
			case 1:
				time = 500;
				break;
			case 2:
				time = 400;
				break;
			case 3:
				time = 300;
				break;
			case 4:
				time = 250;
				break;
			case 5:
				time = 200;
				break;
			case 6:
				time = 170;
				break;
			case 7:
				time = 140;
				break;
			case 8:
				time = 110;
				break;
			case 9:
				time = 80;
				break;
			case 10:
				time = 50;
				break;
		}
		
        this.checkEat(X, Y);

        try {
            this.snake.X = X;
		    this.snake.Y = Y;
        } catch (error) {
            alert(error);
            this.live = false;
        }

		this.live && setTimeout(this.run.bind(this), time);
    }
    
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        } 
    }
}

new GameControl();

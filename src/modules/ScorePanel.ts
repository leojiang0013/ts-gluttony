export default class ScorePanel{
    score:number= 0;
    level:number= 1;
    scoreElem: HTMLElement;
    levelElem: HTMLElement;
    maxLevel: number;
    upScore: number;
    restartElem: HTMLElement;
    levelupElem: HTMLElement;
    leveldownElem: HTMLElement;

    constructor(maxLevel:number=10,upScore:number=10) {
        this.scoreElem = document.getElementById('score')!;
        this.levelElem = document.getElementById('level')!; 
        this.restartElem = document.getElementById('restart') as HTMLElement;
        this.levelupElem = document.getElementById('levelup') as HTMLElement;
        this.leveldownElem = document.getElementById('leveldown') as HTMLElement;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.init();
    }

    init() {
        this.levelupElem.addEventListener('click', this.addLevel.bind(this));
        this.leveldownElem.addEventListener('click', this.reduceLevel.bind(this));
        this.restartElem.addEventListener('click',this.restart)
    }

    addScore() {
        this.scoreElem.innerHTML = ++this.score + '';  
        if (this.score % 4 === 0) {
            this.addLevel();
        }
    }

    addLevel() {
        if (this.level < 10) {
            this.levelElem.innerHTML = ++this.level + '';
        }
    }

    reduceLevel() {
        if (this.level > 1) {
            this.levelElem.innerHTML = --this.level + '';
        }
    }

    restart() {
        window.location.reload();
    }
}
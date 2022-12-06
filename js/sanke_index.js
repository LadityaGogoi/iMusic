// Game constants & Variables

let direction = {x: 0, y: 0};
const foodSound = new Audio('/music/food.mp3');
const gameOverSound = new Audio('/music/gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('/music/music.mp3');

let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 10, y:6}
]


// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if (((ctime - lastPaintTime) / 1000) < (1 / speed)) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}



function gameEngine() {
    // part 1: Updating the snake array & Food

    // Part 2: Display the sanke and Food
    board.innerHTML = "";
    snakeArr.forEach((e, index)=> {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}
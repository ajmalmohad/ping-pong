/**
 * Canvas and Context
 */
const canvas = document.getElementById('container')
const context = canvas.getContext("2d")


/**
 * Objects
 */
const ball = {
    radius: 10,
    positionX: 100,
    positionY: 200,
    velocityX: 1,
    velocityY: 1,
    color: 'white'
}

const leftPlayer = {
    height: 80,
    width: 10,
    positionX: 10,
    positionY: 20,
    color: 'white',
    player: 'left'
}

const rightPlayer = {
    height: 80,
    width: 10,
    positionX: 10,
    positionY: 20,
    color: 'white',
    player: 'right'
}


/**
 * Game
 */
const game = {
    leftScore: 0,
    rightScore: 0,
    turn: 0
}


/**
 * Update and Draw
 */

function drawAll(){
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = leftPlayer.color;
    context.rect(leftPlayer.positionX, leftPlayer.positionY, 10, 100);
    context.fill();
}

function updateStates(){
    leftPlayer.positionX++;
}


/**
 * Game Loop and Render
 */
function gameLoop() {
    updateStates()
    drawAll()
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
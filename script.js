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
    height: 40,
    width: 10,
    positionX: 10,
    positionY: canvas.height/2 - 40/2,
    color: 'white',
    player: 'left'
}

const rightPlayer = {
    height: 40,
    width: 10,
    positionX: canvas.width - 20,
    positionY: canvas.height/2 - 40/2,
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
function drawLeftPlayer(){
    context.beginPath();
    context.fillStyle = leftPlayer.color;
    context.rect(leftPlayer.positionX, leftPlayer.positionY, leftPlayer.width, leftPlayer.height);
    context.fill();
}

function drawRightPlayer(){
    context.beginPath();
    context.fillStyle = rightPlayer.color;
    context.rect(rightPlayer.positionX, rightPlayer.positionY, rightPlayer.width, rightPlayer.height);
    context.fill();
}

function drawAll(){
    context.clearRect(0,0, canvas.width, canvas.height);
    drawLeftPlayer()
    drawRightPlayer()
}

function updateStates(){
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
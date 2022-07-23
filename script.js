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
    positionY: canvas.height / 2 - 40 / 2,
    color: 'white',
    player: 'left',
    speed: 2
}

const rightPlayer = {
    height: 40,
    width: 10,
    positionX: canvas.width - 20,
    positionY: canvas.height / 2 - 40 / 2,
    color: 'white',
    player: 'right',
    speed: 2
}


/**
 * Game
 */
const game = {
    leftScore: 0,
    rightScore: 0,
    turn: 0
}

const keyPressed = {
    W: false,
    S: false,
    Up: false,
    Down: false
}



/**
 * Update and Draw
 */
function drawLeftPlayer() {
    context.beginPath();
    context.fillStyle = leftPlayer.color;
    context.rect(leftPlayer.positionX, leftPlayer.positionY, leftPlayer.width, leftPlayer.height);
    context.fill();
}

function drawRightPlayer() {
    context.beginPath();
    context.fillStyle = rightPlayer.color;
    context.rect(rightPlayer.positionX, rightPlayer.positionY, rightPlayer.width, rightPlayer.height);
    context.fill();
}

function drawAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLeftPlayer()
    drawRightPlayer()
}


function updateKeyPresses(){
    if (keyPressed['W']) {
        if (leftPlayer.positionY > 0) {
            leftPlayer.positionY -= leftPlayer.speed;
        }
    }
    if (keyPressed['S']) {
        if (leftPlayer.positionY < canvas.height - leftPlayer.height) {
            leftPlayer.positionY += leftPlayer.speed;
        }
    }
    if (keyPressed['Up']) {
        if (rightPlayer.positionY > 0) {
            rightPlayer.positionY -= rightPlayer.speed;
        }
    }
    if (keyPressed['Down']) {
        if (rightPlayer.positionY < canvas.height - rightPlayer.height) {
            rightPlayer.positionY += rightPlayer.speed;
        }
    }
}

function updateStates() {
    
}


/**
 * Key Listeners
 */
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS') {
        keyPressed['S'] = true;
    }
    if (code === 'KeyW') {
        keyPressed['W'] = true;
    }
    if (code === 'ArrowUp') {
        keyPressed['Up'] = true;
    }
    if (code === 'ArrowDown') {
        keyPressed['Down'] = true;
    }
    
}, false);



document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;

    if (code === 'KeyS') {
        keyPressed['S'] = false;
    }
    if (code === 'KeyW') {
        keyPressed['W'] = false;
    }
    if (code === 'ArrowUp') {
        keyPressed['Up'] = false;
    }
    if (code === 'ArrowDown') {
        keyPressed['Down'] = false;
    }

}, false);



/**
 * Game Loop and Render
 */
function gameLoop() {
    updateKeyPresses()
    updateStates()
    drawAll()
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
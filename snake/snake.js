const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
let snake = [{ x: 200, y: 200 }];
let food = generateFood();
let direction = { x: 0, y: 0 };
let newDirection = { x: 0, y: 0 };
let score = 0;

function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
    };
}

document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
    const arrowLeft = 37;
    const arrowUp = 38;
    const arrowRight = 39;
    const arrowDown = 40;

    switch(event.keyCode) {
        case arrowLeft:
            if (direction.x === 0) {
                newDirection = { x: -gridSize, y: 0 };
            }
            break;
        case arrowUp:
            if (direction.y === 0) {
                newDirection = { x: 0, y: -gridSize };
            }
            break;
        case arrowRight:
            if (direction.x === 0) {
                newDirection = { x: gridSize, y: 0 };
            }
            break;
        case arrowDown:
            if (direction.y === 0) {
                newDirection = { x: 0, y: gridSize };
            }
            break;
    }
}
function changeDirection(event) {
    const arrowLeft = 37;
    const arrowUp = 38;
    const arrowRight = 39;
    const arrowDown = 40;

    switch(event.keyCode) {
        case arrowLeft:
            if (direction.x === 0) {
                newDirection = { x: -gridSize, y: 0 };
            }
            break;
        case arrowUp:
            if (direction.y === 0) {
                newDirection = { x: 0, y: -gridSize };
            }
            break;
        case arrowRight:
            if (direction.x === 0) {
                newDirection = { x: gridSize, y: 0 };
            }
            break;
        case arrowDown:
            if (direction.y === 0) {
                newDirection = { x: 0, y: gridSize };
            }
            break;
    }
}
function gameLoop() {
    direction = newDirection;

    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFood();
    } else {
        snake.pop();
    }

    if (isCollision(head)) {
        resetGame();
    }

    draw();

    setTimeout(gameLoop, 100);
}

function isCollision(head) {
    return head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
    newDirection = { x: 0, y: 0 };
    score = 0;
    food = generateFood();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);

    ctx.fillStyle = 'green';
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, gridSize, gridSize));

    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

gameLoop();

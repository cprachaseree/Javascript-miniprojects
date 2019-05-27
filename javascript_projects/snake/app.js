const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// size of the snake unit
const box = 32;

// load images
const ground = new Image();
ground.src = "./images/ground.png";
const foodImage = new Image();
foodImage.src = "./images/food.png";

// Snake
const snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
};

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 13 + 3) * box
};

let score = 0;
let direction;
// control the snake
document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 37:
      direction = "LEFT";
      break;
    case 38:
      direction = "UP";
      break;
    case 39:
      direction = "RIGHT";
      break;
    case 40:
      direction = "DOWN";
      break;
  }
});

// check collision
function collision(head, array) {
  for(let i = 0; i < array.length; ++i) {
    if(head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

function draw() {
  context.drawImage(ground, 0, 0);
  for(let i = 0; i < snake.length; ++i) {
    context.fillStyle = (i === 0) ? "green" : "white";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    // border color of the snake
    context.stokeStyle = "red";
    context.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  context.drawImage(foodImage, food.x, food.y);

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(snakeX === food.x && snakeY === food.y) {
    ++score;
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 13 + 1) * box
    }
  } else {
    //remove tail
    snake.pop();
  }

  //gameover
  if(snakeX < box || snakeX > 17*box || snakeY < box || snakeY > 13*box) {
    clearInterval(game);
  }

  //which direction
  switch (direction) {
    case "LEFT":
      snakeX -= box;
      break;
    case "UP":
      snakeY -= box;
      break;
    case "RIGHT":
      snakeX += box;
      break;
    case "DOWN":
      snakeY += box;
      break;

  }

  // add new head
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
  context.fillStyle = "white";
  context.font = "45px Changa one"
  context.fillText(score, 2*box, 1.6*box);
}

let game = setInterval(draw, 100);

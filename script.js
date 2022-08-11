let randomArray = [];
let clickArray = [];
let clickArrayNumber = [];
let delay = 800;
let level = 1;
let numberSteps;
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");
const rightBox = document.querySelectorAll(".js-gbTile");
const gameBoxes = document.querySelector(".js-gb");
const headerWin = document.querySelector(".js-win");

const start = () => {
  randomArray = [];
  clickArray = [];
  clickArrayNumber = [];
  level = 1;
  gameBoxes.classList.remove("win");
  headerWin.classList.add("gameBoxes__header");
  if (randomArray.length == 0) {
    create_game();
  }
};

buttonStartGame.addEventListener("click", start);
const reset = () => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.removeEventListener("click", animateClickTile);
  });
  randomArray = [];
  clickArray = [];
  level = 1;
};
buttonReset.addEventListener("click", () => {
  reset();
});

const create_game = () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  for (i = 1; i <= choiceNumberOfSteps; i++) {
    draw = Math.floor(Math.random() * 16) + 1;
    randomArray.push(draw);
  }
  numberSteps = +choiceNumberOfSteps;

  drawTiles();
};
const animateLeftTiles = (id) => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.removeEventListener("click", animateClickTile);
  });
  let tileRandom = document.getElementById(id);
  tileRandom.classList.add("active");
  setTimeout(() => {
    tileRandom.classList.remove("active");
  }, 500);
  setTimeout(() => {
    rightBox.forEach((tile) => {
      tile.classList.add("tileUserReady");
      tile.addEventListener("click", animateClickTile);
    });
  }, 800 * level);
};

const drawTiles = (id) => {
  delay = 800;
  randomArray.slice(0, level).forEach((title, index) => {
    if (index < level) {
      setTimeout(() => {
        animateLeftTiles("tileleft" + title);
      }, (delay += 800));
    }
  });
};
const checkInput = () => {
  if (clickArray.length === level) {
    if (JSON.stringify(randomArray) == JSON.stringify(clickArrayNumber)) {
      win();
    }
    clickArray = [];
    if (randomArray[level - 1] == clickArrayNumber[level - 1]) {
      level++;
      drawTiles();
    } else {
      gameOver();
    }
  }
};
const animateClickTile = (event) => {
  const clickedTileId = event.target.id;
  clickArray.push(clickedTileId);
  const clickedTile = event.target;
  clickedTile.classList.add("active");
  setTimeout(() => {
    clickedTile.classList.remove("active");
    rightBox.forEach((tile) => {
      tile.classList.add("tileUserReady");
    });
  }, 500);

  clickArrayNumber = clickArray.map((str) => {
    return Number(str);
  });
  checkInput();
};

const gameOver = () => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.classList.add("tileWrong");
    tile.removeEventListener("click", animateClickTile);
  });
  setTimeout(() => {
    rightBox.forEach((tile) => {
      tile.classList.remove("tileWrong");
      drawTiles();
    });
  }, 800);
};

const win = () => {
  randomArray = [];
  clickArray = [];
  clickArrayNumber = [];
  level = 1;
  buttonStartGame.addEventListener("click", start);
  gameBoxes.classList.add("win");
  headerWin.classList.remove("gameBoxes__header");
};

const randomArray = [];
let clickArray = [];
let clickArrayNumber = [];
let delay = 1000;
let level = 1;
let isgameover;
let canInput;
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");
const rightBox = document.querySelectorAll(".js-gbTile");
const gameBoxes = document.querySelector(".js-gb");
const headerWin = document.querySelector(".js-win");

buttonStartGame.addEventListener("click", () => {
  create_game();

  for (const tile of rightBox) {
    tile.addEventListener("click", animateClickTile);
  }
});
const create_game = () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  for (i = 1; i <= choiceNumberOfSteps; i++) {
    draw = Math.floor(Math.random() * 16) + 1;
    randomArray.push(draw);
  }
  output_signals();
  console.log(randomArray);
};
const animate_sequence_button = (id) => {
  let tileRandom = document.getElementById(id);
  tileRandom.classList.add("active");
  setTimeout(() => {
    tileRandom.classList.remove("active");
  }, 1000);
};

const output_signals = (id) => {
  randomArray.slice(0, level).forEach((title, index) => {
    if (index < level) {
      setTimeout(() => {
        animate_sequence_button("tileleft" + title);
      }, (delay += 1000));
    }
  });
  rightBox.forEach((tile) => {
    tile.classList.add("tileUserReady");
  });
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
  }, 1000);
  clickArrayNumber = clickArray.map((str) => {
    return Number(str);
  });
  if (clickArray.length === level) {
    console.log("validation");
    level++;
    output_signals();
    clickArray = [];
  }
  console.log(clickArrayNumber);
};

const validationUserInput = (buttonid) => {
  animateClickTile(buttonid);
  if (clickArray[clickArray.length - 1] !== randomArray[clickArray.length - 1]) {
    isgameover = true;
    can_input = false;
    gameOver();
  }
  if (clickArray.length == level && !isgameover) {
    level++;
    delay = 0;
    clickArray = [];
  }
};

const gameOver = () => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.classList.add("tileWrong");
  });
  setTimeout(() => {
    rightBox.forEach((tile) => {
      tile.classList.remove("tileWrong");
      for (const tile of rightBox) {
        tile.removeEventListener("click", animateClickTile);
      }
    });
    create_game();
  }, 3000);
};

const win = () => {
  gameBoxes.classList.add("win");
  headerWin.classList.toggle("gameBoxes__header");
};

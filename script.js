let randomArray = [];
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
let numberSteps;

buttonStartGame.addEventListener("click", () => {
  if (randomArray.length == 0) {
    create_game();
  }
});
buttonReset.addEventListener("click", () => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.removeEventListener("click", animateClickTile);
  });
  randomArray = [];
  clickArray = [];
  level = 1;
  console.log(randomArray);
});

const create_game = () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  for (i = 1; i <= choiceNumberOfSteps; i++) {
    draw = Math.floor(Math.random() * 16) + 1;
    randomArray.push(draw);
  }
  numberSteps = +choiceNumberOfSteps;

  output_signals();
  console.log(randomArray);
};
const animate_sequence_button = (id) => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.removeEventListener("click", animateClickTile);
  });
  let tileRandom = document.getElementById(id);
  tileRandom.classList.add("active");
  setTimeout(() => {
    tileRandom.classList.remove("active");
    rightBox.forEach((tile) => {
      tile.classList.add("tileUserReady");
      tile.addEventListener("click", animateClickTile);
    });
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
};
const checkInput = () => {
  if (clickArray.length === level) {
    console.log(randomArray[level - 1]);
    console.log(clickArrayNumber[level - 1]);
    if (JSON.stringify(randomArray) == JSON.stringify(clickArrayNumber)) {
      win();
    }
    if (randomArray[level - 1] == clickArrayNumber[level - 1]) {
      level++;
      output_signals();
      clickArray = [];
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
  }, 1000);

  clickArrayNumber = clickArray.map((str) => {
    return Number(str);
  });
  checkInput();
  console.log(clickArrayNumber);
};

const validationUserInput = (buttonid) => {
  animateClickTile(buttonid);
  if (clickArray[clickArray.length - 1] !== randomArray[clickArray.length - 1]) {
    isgameover = true;
    can_input = false;
    gameOver();
  }
  // if (clickArray.length == level && !isgameover) {
  //   level++;
  //   delay = 0;
  //   clickArray = [];
  // }
};

const gameOver = () => {
  rightBox.forEach((tile) => {
    tile.classList.remove("tileUserReady");
    tile.classList.add("tileWrong");
    tile.removeEventListener("click", animateClickTile);
  });
  // setTimeout(() => {
  //   rightBox.forEach((tile) => {
  //     tile.classList.remove("tileWrong");
  //     for (const tile of rightBox) {
  //       tile.removeEventListener("click", animateClickTile);
  //     }
  //   });
  //   create_game();
  // }, 3000);
};

const win = () => {
  gameBoxes.classList.add("win");
  headerWin.classList.toggle("gameBoxes__header");
};

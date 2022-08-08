const randomArray = [];
const copyclickArray = [];
const clickArray = [];
let delay = 0;
let level = 0;
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");
const rightBox = document.querySelectorAll(".js-gbTile");

const animateClickTile = (event) => {
  const clickedTile = event.target.id;
  console.log(clickedTile);
};
for (const tile of rightBox) {
  tile.addEventListener("click", animateClickTile);
}

buttonStartGame.addEventListener("click", () => {
  create_game();
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
  randomArray.forEach((title, index) => {
    setTimeout(() => {
      animate_sequence_button("tileleft" + title);
    }, (delay += 1000));
    rightBox.forEach((tile) => {
      tile.classList.add("tileUserReady");
    });
  });
};

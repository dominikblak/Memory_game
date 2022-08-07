const randomArray = [];
const clickArray = [];
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");

buttonStartGame.addEventListener("click", () => {
  create_game();
});
const create_game = () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  for (i = 1; i <= choiceNumberOfSteps; i++) {
    draw = Math.floor(Math.random() * 17) + 1;
    randomArray.push(draw);
  }
  output_signals();
  console.log(randomArray);
};
const animate_sequence_button = (id) => {
  const button = document.getElementById(id);
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("activeLeftTitle");
  }, 400);
};

const output_signals = (id) => {
  randomArray.forEach((title, index) => {
    setTimeout(() => {
      animate_sequence_button("tileleft" + title);
    }, 1000);
  });
};

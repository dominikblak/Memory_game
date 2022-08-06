const randomArray = [];
const clickArray = [];
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");

buttonStartGame.addEventListener("click", () => {
  startGame();
});
const startGame = () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  for (i = 1; i <= choiceNumberOfSteps; i++) {
    draw = Math.floor(Math.random() * 17) + 1;
    randomArray.push(draw);
  }
  console.log(randomArray);
};

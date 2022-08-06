const randomArray = [];
const clickArray = [];
const numberOfSteps = document.querySelector(".js-steps");
const buttonReset = document.querySelector(".js-reset");
const buttonStartGame = document.querySelector(".js-startGame");

buttonStartGame.addEventListener("click", () => {
  const choiceNumberOfSteps = document.getElementById("steps").value;
  console.log(choiceNumberOfSteps);
});

// const numberOfSteps = document.querySelector(".js-steps");
// const choiceNumberOfSteps = numberOfSteps.value;
// for (let steps = choiceNumberOfSteps; i <= steps; steps++) {
//   rand = Math.floor(Math.random() * 9) + 1;
//   randomArray.push(rand);
// }

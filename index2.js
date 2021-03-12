//getting user input
const rl = require("readline");
 const readline = rl.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
 });
//const prompt = require('prompt-sync')({ sigint: true });

//importing modules
const FCG = require("fantasy-content-generator");
const GameStep = require("./gamesteps.js");
const steps = require("./steps.js");
const Dragon = require("./dragonclass.js");
const Weapon = require("./weaponclass.js");

function startGame() {
  let currentStep = "start";

function logStep() {
    const step = steps[currentStep];

    if (step) {
      readline.question(`${step.message || ""} `, (input) => {
        handleAnswer(input);
      });
    }
  }

  function handleAnswer(answer) {
    let step;

    if (answer === "yes") {
      step = steps[currentStep].yes;
    } else if (answer === "red") {
      step = steps[currentStep].red;
    } else if (answer === "blue") {
      step = steps[currentStep].blue;
    } else if (answer === "green") {
      step = steps[currentStep].green;
    } else if (parseInt(answer) === 1) {
      step = steps[currentStep].one;
    } else if (parseInt(answer) === 2) {
      step = steps[currentStep].two;
    } else if (answer === "no") {
      step = steps[currentStep].no;
  } else {
      console.log("Invalid input! Please try again.");
    step = steps[currentStep];
  }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    } else {
      currentStep = currentStep;
    }
    logStep();
  }

  console.clear();
  logStep();
}

startGame();
//getting user input
const rl = require("readline");
 const readline = rl.createInterface({
   input: process.stdin,
   output: process.stdout,
 });
//const prompt = require('prompt-sync')({ sigint: true });
//importing modules
const FCG = require("fantasy-content-generator");
const GameStep = require("./gamesteps.js");
const Dragon = require("./dragonclass.js");

 class Weapon {
  constructor(name,score) {
    this.name = name;
    this.score = score;
  }
}

//instances of weapon class
var weapon1 = new Weapon(`${FCG.MagicItems.generate().formattedData.title}`, 20);
var weapon2 = new Weapon(`${FCG.MagicItems.generate().formattedData.title}`, 70);


//instances of game steps class
var firstMessage = new GameStep("description.....would you like to read the message? (yes/no)");
var secondMessage = new GameStep("would you like to accept the quest (yes/no) ");
var thirdMessage = new GameStep(`That's very brave of you, to prepare for the quest you'll need a weapon, with the time you have you can only travel to one of these places to acquire one item to assist you in the battle against the mighty dragon. Would you like to go to the ${FCG.Settlements.generate().establishments.formattedData.type} for a ${weapon1.name} or the ${FCG.Settlements.generate().establishments.formattedData.type} for a ${weapon2.name}? (type '1' or '2') `)
var sixthMessage = new GameStep(`Are you ready to battle the dragon with your weapon (yes/no) `);
var seventhMessage = new GameStep("would you like to battle a red, green or blue dragon?");


//instances of dragon class
var red = new Dragon ("fireball", 70);
var blue = new Dragon ("scaly", 60);
var green = new Dragon ("firebreather", 75);

  const steps = {
    start: {
      message: firstMessage.message,
      yes: "secondStep",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    end: {
      message: "do you want to play again?",
      yes: "start",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    secondStep: {
      message: secondMessage.message,
      yes: "thirdStep",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    thirdStep: {
      message: thirdMessage.message,
      one: "fourthStep",
      two: "fifthStep",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    fourthStep: {
      message: `You have travelled to the armoury of the land. Please speak to the blacksmith to acquire the ${weapon1.name} (yes) `,
      yes: "sixthStep"
    },
    fifthStep: {
      message: `You have travelled to the special armoury of the land. Please speak to the blacksmith to acquire the ${weapon2.name} ...`,
      yes: "sixthStep"
    },
    sixthStep: {
      message: sixthMessage.message,
      yes: "seventhStep",
      no: "areYouSure"
    },
    seventhStep: {
      message: seventhMessage.message,
      red: () => {
        red.fight(generateRandomNumber(40));
        newGame();
        },
      green: () => {
          green.fight(generateRandomNumber(40));
          newGame();
        },
      blue: () => {
        blue.fight(generateRandomNumber(40));
        newGame();
      }
    },
    areYouSure: {
      message: "Are you sure? (yes/no)",
      yes: () => {
        console.log("Oh, that's a shame, you've come so far! But goodbye!");
        readline.close();
      },
      no: "sixthStep"
    }
  }

  function newGame() {
    readline.question(`would you like to play again? (yes/no) `, (input) => {
      if (input === "yes") {
        startGame()
      } 
      else {
        console.log("okay bye");
        readline.close();
      }
    });
  }

function startGame() {
  let currentStep = "start";

function logStep() {
    const step = steps[currentStep];  // -> step = steps["start"] -> const steps = {start:...}

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

  function isNumber(num) {
    const value = parseInt(num);
    return !isNaN(value);
  }

  console.clear();
  logStep();
}


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


startGame();
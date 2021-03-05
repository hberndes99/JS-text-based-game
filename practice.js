
const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//getting user input
const prompt = require('prompt-sync')({ sigint: true });



// making generic game step class
class GameStep {
  constructor(message, input) {
    this.message = message;
  }
}

 class Weapon {
  constructor(name,score) {
    this.name = name;
    this.score = score;
  }
}

class Dragon {
  constructor(name, strength) {
    this.name = name;
    this.strength = strength;
  }
  checkStrength(strengthLevel, hits) {
        if (strengthLevel > 50) { 
            console.log(`oh no! You only managed to hit the dragon ${hits} times, you were defeated!`);
            
        }
        else {console.log("you slayed the dragon!");
     }
    }
  fight(hits) {
    let strengthLevel = this.strength - hits;
    this.checkStrength(strengthLevel, hits);
    }
}

//instances of objects

var firstMessage = new GameStep("description.....would you like to read the message? (yes/no)");
var secondMessage = new GameStep("would you like to accept the quest (yes/no) ");
var thirdMessage = new GameStep("That's very brave of you, to prepare for the quest you'll need a weapon, with the time you have you can only travel to one of these places to acquire one item to assist you in the battle against the mighty dragon. Would you like to go to place 1 for an axe or place 2 for a spear? ")
var sixthMessage = new GameStep(`Are you ready to battle the dragon with your weapon (yes/no) `);
var seventhMessage = new GameStep("would you like to battle a red, green or blue dragon?");

var axe = new Weapon("Leviathan Axe", 20);
let spear = new Weapon("Dragon Piercer", 70);

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
      message: "You have travelled to the armoury of the land. Please speak to the blacksmith to acquire the \"Leviathan Axe\" (yes) ",
      yes: "sixthStep"
    },
    fifthStep: {
      message: "You have travelled to the special armoury of the land. Please speak to the blacksmith to acquire the magical spear \"Dragon Piercer\" ...",
      yes: "sixthStep"
    },
    sixthStep: {
      message: sixthMessage.message,
      yes: "seventhStep",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    seventhStep: {
      message: seventhMessage.message,
      red: () => {
        red.fight(generateRandomNumber(40));
        newGame();
        },
      green: () => {
          green.fight(generateRandomNumber(40));
          readline.close();
        },
      blue: () => {
        blue.fight(generateRandomNumber(40));
        readline.close();
      }
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
    } else if (isNumber(answer) == 1) {
      step = steps[currentStep].one;
    } else if (isNumber(answer) == 2) {
      step = steps[currentStep].two;
    } else if (answer === "no") {
      step = steps[currentStep].no;
  } else {
      console.log("Invalid input! Please try again.");
    step = steps[currentStep];
  }
// error handling
    // else if (answer === "no") {
    //     step = steps[currentStep].no;
    // } else {
    //     console.log("Invalid input! Please try again.");
    //     step = steps[currentStep];
    // }

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
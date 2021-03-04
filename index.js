// import FCG from "fantasy-content-generator";

/* Irene's template
const rl = require("readline");
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  const steps = {
    start: {
      message: "Do you want to play a game? yes/no",
      yes: "firstStep",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    end: {
      message: "Do you want to play again? yes/no",
      yes: "start",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    firstStep: {
      message: "Do you love me? yes/no",
      yes: "lovely",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    lovely: {
      message: "Great, how much? 1-10",
      no: () => {
        console.log("Bye then!");
        readline.close();
      },
    },
    // put more steps here
  };

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
    } else if (isNumber(answer)) {
      console.log(`${answer} is all I need. <3`);
    } else {
      step = steps[currentStep].no;
    }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    } else {
      currentStep = "end";
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

startGame();
*/

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
  constructor(name, health) {
    
  }

}


// making instances of step class
var firstStep = new GameStep("description.....would you like to read the message? (yes/no) ");
var secondStep = new GameStep("would you like to accept the quest (yes/no) ");
var thirdStep = new GameStep("That's very brave of you, to prepare for the quest you'll need a weapon, with the time you have you can only travel to one of these places to acquire one item to assist you in the battle against the mighty dragon. Would you like to go to place 1 for an axe or place 2 for a spear? ")




function startGame() {
  console.log("Welcome to the world of....");
  let userName = prompt("What's your name? ");
  console.log(`Greetings ${userName}!`);
  // first question would u like to read the message
  let firstMessage = prompt(firstStep.message);
  if (firstMessage === "yes") {
    console.log("description of the quest....");
    let secondMessage = prompt(secondStep.message);
    if (secondMessage === "yes") {
      let thirdMessage = prompt(thirdStep.message);
      if (parseInt(thirdMessage) === 1) {
          console.log("You have travelled to the armoury of the land. Please speak to the blacksmith to acquire the \"Leviathan Axe\"");
          // Add some sort of challenge to acquire armour
          // Add dialogue with Blacksmith about armour and dragon
          let axe = new Weapon("Leviathan Axe", 20); 
          battle(axe)
      }
      else if (parseInt(thirdMessage) === 2) {
        console.log("You have travelled to the special armoury of the land. Please speak to the blacksmith to acquire the magical spear \"Dragon Piercer\" ...");
        // Add some sort of challenge to acquire weapon
        // Add dialogue with Blacksmith about weapon and dragon
        let spear = new Weapon("Dragon Piercer", 70);
        battle(spear)
      }
      else {console.log("oh no that's not a place!")}
    } 
    else {console.log("okay bye")}
  } 
  else { console.log("okay bye"); }
}

function battle(weapon) {
//ask about battle
var fourthStep = new GameStep(`Are you ready to battle the dragon with your ${weapon.name}? (yes/no) `)
let finalMessage = prompt(fourthStep.message);
if (finalMessage === "yes") {
  console.log("Onward!")
}
else {console.log("You went home")}
}

startGame();



/* making generic game step class
class GameStep {
  constructor(message) {
    this.message = message;
    this.checkInput = function (input) {
      if (input === "yes") {
        console.log("next step")
      }
      else console.log("ok bye!")
    }
  }
}

var firstStep = new GameStep("description.....would you like to read the message? (yes/no) ");
var secondStep = new GameStep("would you like to accept the quest ")

function startGame() {
  console.log("Welcome to the world of....");
  let userName = prompt("What's your name? ");
  console.log(`Greetings ${userName}!`);
  // first question would u like to read the message
  firstStep.checkInput(prompt(firstStep.message));


}

startGame();
*/




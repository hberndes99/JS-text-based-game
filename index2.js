
//getting user input
const prompt = require('prompt-sync')({ sigint: true });



// making generic game step class
class GameStep {
  constructor(message) {
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
  checkStrength(fightPower, hits) {
        if (this.strength - fightPower > 50) { 
            console.log(`oh no! You only managed to hit the dragon ${hits} times, you were defeated!`);
        }
        else {console.log("you slayed the dragon!")}
    }
  fight(hits, weaponScore) {
    let fightPower = hits * weaponScore;
    this.checkStrength(fightPower, hits);
    }
}


// making instances of step class
var firstStep = new GameStep("description.....would you like to read the message? (yes/no)");
var secondStep = new GameStep("would you like to accept the quest (yes/no) ");
var thirdStep = new GameStep("That's very brave of you, to prepare for the quest you'll need a weapon, with the time you have you can only travel to one of these places to acquire one item to assist you in the battle against the mighty dragons. Would you like to go to place 1 for an axe or place 2 for a spear? ")
var fifthMessage = new GameStep("would you like to battle a red, green or blue dragon?")

// instance of dragon 
var red = new Dragon ("fireball", 70)
var blue = new Dragon ("scaly", 60);
var green = new Dragon ("firebreather", 75);

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
          let axe = new Weapon("Leviathan Axe", 5); 
          battle(axe)
      }
      else if (parseInt(thirdMessage) === 2) {
        console.log("You have travelled to the special armoury of the land. Please speak to the blacksmith to acquire the magical spear \"Dragon Piercer\" ...");
        // Add some sort of challenge to acquire weapon
        // Add dialogue with Blacksmith about weapon and dragon
        let spear = new Weapon("Dragon Piercer", 7);
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
  var fourthStep = new GameStep(`Are you ready to battle the dragon with your ${weapon.name} (yes/no) `);
  let fourthAnswer = prompt(fourthStep.message);
  if (fourthAnswer === "yes") {
       let fifthAnswer = prompt(fifthMessage.message);
        
        if (fifthAnswer === "red") {
            red.fight(generateRandomNumber(20), weapon.score);
        }
        else if (fifthAnswer === "blue") {
            blue.fight(generateRandomNumber(20), weapon.score);
        }
        else if (fifthAnswer === "green") {
            green.fight(generateRandomNumber(20), weapon.score);
        }
        else    
            console.log("oh..there's no dragons that colour here");
        }
  else  
    console.log("You went home")
}



function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

startGame();



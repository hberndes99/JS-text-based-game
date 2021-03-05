const prompt = require('prompt-sync')({ sigint: true });

function Gamestep (message, inputDialog, nextGameStep, currentGameStep) {
        console.log(message);
        this.nextGameStep=nextGameStep;
        this.currentGameStep= Gamestep.currentGameStep;
        this.message= message;
        this.inputDialog = prompt(message.inputDialog);
        /*if (Gamestep.currentGameStep.inputDialog=="yes"){
            console.log("hello");
         }else if (Gamestep.currentGameStep.inputDialog =="no") {
             console.log("Goodbye!");
         } else if (Gamestep.currentGameStep.inputdialog != "yes" || Gamestep.currentGameStep.inputdialog != "no"){
             console.log("Invalid selection, Goodbye!")
         }*/
    }


function startGame() {
    console.log("Welcome to the world of....");
    let userName = prompt("What's your name? ");
    console.log(`Greetings ${userName}!`);
    // first question would u like to read the message
    var max_count = 5;
   firstGameStep = new Gamestep("description.....would you like to read the message?\"Yes\"\"No\"")    
        if (firstGameStep.inputDialog=="yes"){
           yes: "secondGameStep"
        }else if (firstGameStep.inputDialog =="no") {
            console.log("Goodbye!");
        } else if (firstGameStep.inputdialog != "yes" || firstGameStep.inputdialog != "no"){
            console.log("Invalid selection, Goodbye!")
        }

    secondGameStep = new Gamestep("would you like to accept the quest\"Yes\"\"No\"")
        if (secondGameStep.inputDialog=="yes"){
            yes: "thirdGameStep"
         }else if (secondGameStep.inputDialog =="no") {
             console.log("Goodbye!");
         } else if (secondGameStep.inputdialog != "yes" || secondGameStep.inputdialog != "no"){
             console.log("Invalid selection, Goodbye!")
         }

    thirdGameStep = new Gamestep("That's very brave of you, to prepare for the quest you'll need a weapon, with the time you have you can only travel to one of these places to acquire one item to assist you in the battle against the mighty dragon. Would you like to go to place 1 for an axe or place 2 for a spear? \"1\" or \"2\"")
        if (thirdGameStep.inputDialog==1){
            console.log("You have travelled to the armoury of the land. Please speak to the blacksmith to acquire the \"Leviathan Axe\"");
          // Add some sort of challenge to acquire armour
          // Add dialogue with Blacksmith about armour and dragon
          }else if (thirdGameStep.inputDialog ==2) {
            console.log("You have travelled to the special armoury of the land. Please speak to the blacksmith to acquire the magical spear \"Dragon Piercer\" ...");
        // Add some sort of challenge to acquire weapon
        // Add dialogue with Blacksmith about weapon and dragon
          } else if (thirdGameStep.inputdialog !== 1 || thirdGameStep.inputdialog !== 2){
              console.log("Invalid selection, Goodbye!")
          }

    }


startGame();
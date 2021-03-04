
import FCG from '"fantasy-content-generator"';
FCG.Names.generate();
FCG.Storyhooks.npcActs();
FCG.NPCs.generate();
FCG.Settlements.generate();
FCG.MagicItems.generate();

 // trying to make a class for step
/*
class Step {
    constructor (message, yes) {
        this.message = message;
        this.yes = yes;
        no = () => {
            console.log("Bye then!");
            readline.close();
        }
    }
}

let start = new Step ("would you like to play a game", user input)
let firstStep = new Step ("are you sure", "secondStep");
*/

 class Conversation{
    constructor (message) {
        this.message = message;
    }
    output(){
        return this.message
    }
}

var message1 = new Conversation ("Hello!");

console.log(message1.output());
console.log(message1.message);

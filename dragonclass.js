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

module.exports = Dragon;
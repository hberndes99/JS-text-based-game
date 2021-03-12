class GameStep {
    constructor(message) {
      this.message = message;
    }
  }
  
  // import modules
  const FCG = require("fantasy-content-generator");
  const Weapon = require("./weaponclass.js");
  
  //instances of weapon class
  var weapon1 = new Weapon(`${FCG.MagicItems.generate().formattedData.title}`, 20);
  var weapon2 = new Weapon(`${FCG.MagicItems.generate().formattedData.title}`, 70);
  var place1 = FCG.Settlements.generate().establishments.formattedData.type;
  var place2 = FCG.Settlements.generate().establishments.formattedData.type;
  
  module.exports = GameStep;
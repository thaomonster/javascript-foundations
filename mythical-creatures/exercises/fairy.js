class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured'
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust = 11;
  };

  believe() {
    this.dust += 10
  };

  makeDresses(newDresses) {
    this.clothes.dresses = this.clothes.dresses.concat(newDresses)
  };

  provoke() {
    this.disposition = 'Vengeful'
  };

  replaceInfant(infant) {
    infant.disposition = 'Malicious';
    this.humanWards.push(infant);

    if (this.humanWards.length >= 3){
      this.disposition = 'Good natured'
    };
    
    return infant;
  }
};

module.exports = Fairy;
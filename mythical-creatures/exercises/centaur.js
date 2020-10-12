class Centaur {
  constructor(obj) {
    this.name = obj.name;
    this.breed = obj.type;
    this.cranky = false;
    this.standing = true;
    this.count = 0;
    this.standing = true;
    this.layingDown = false;
  };

  shoot() {
    this.count++

    if (this.count >= 3) {
      this.cranky = true
    };

    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else {
      return 'Twang!!!'
    };
  };

  run() {
    this.count++

    if (this.count >= 3) {
      this.cranky = true
    };

    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    };
  };

  sleep() {
    this.cranky = false;
    this.count = 0;

    if (this.standing === true) {
      return 'NO!'
    } else if (this.layingDown === true) {
      return 'ZZZZ'
    };
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion() {
    if (this.cranky === false) {
      this.cranky = true;
      return 'Not while I\'m laying down!';
    } else {
      this.cranky = false;
    }
  };
};

module.exports = Centaur;
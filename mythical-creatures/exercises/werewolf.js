class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.count = 0;
    this.hungry = false;
  }


  transform() {
    this.count++

    if (this.count % 2 === 0) {
      this.human = true;
      this.wolf = false;
    } else {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    }
  }
  
  eat(victim) {
    if (this.human === false) {
      victim.alive = false
    }
  }
}

module.exports = Werewolf;
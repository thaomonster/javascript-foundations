class Sphinx {
  constructor(name) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  };

  collectRiddle(brainTeaser) {
    this.riddles.push(brainTeaser)
    if (this.riddles.length > 3) {
    this.riddles.shift(brainTeaser)
    };
  };

  attemptAnswer(answer) {
    var attempts = 0
    for (var i = 0; i < this.riddles.length; i++) {
      attempts++
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1)
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}"\???`
          };
        };
        if (attempts === this.riddles.length) {
          this.heroesEaten++
        };
      };
    return "That wasn't that hard, I bet you don't get the next one";
    };
  };

module.exports = Sphinx;






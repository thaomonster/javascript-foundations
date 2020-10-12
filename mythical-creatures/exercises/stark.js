class Stark {
  constructor(name, location) {
    this.name = name;
    this.location = location || 'Winterfell'
    this.safe = false;
  };

  houseWords() {
   return this.safe === true ? 'The North Remembers' : 'Winter is Coming'
  };
};

module.exports = Stark;
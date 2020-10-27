class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  };

  fill(candy) {
    this.count++;
    this.candies.push(candy);
  };

  contains(candy) {
    return candy.includes('Lindt Chocolate') ? true : false
  };
};

module.exports = Bag;
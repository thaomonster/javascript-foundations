class Hobbit {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.old = false;
        this.name === 'Frodo' ? this.hasRing = true : this.hasRing = false;
    }

    celebrateBirthday() {
        this.age++;
        this.age >= 33 ? this.adult = true : this.adult = false;
        this.age >= 101 ? this.old = true : this.old = false;
    }
}



module.exports = Hobbit;
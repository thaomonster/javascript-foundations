class Magician {
    constructor(obj) {
        this.name = obj.name;
        this.topHat = true;
        if (obj.topHat === false) {
            this.topHat = false;
        }
        this.confident = false;
        this.count = 0;
    }

    incantation(message) {
       var casting = message.toUpperCase();
       return `${casting}!`;
    }

    cast() {
        this.count++
        if (this.count >=3) {
            this.confident = true
        }

        if (this.topHat === false) {
            return 'PULL DOVE FROM SLEEVE'
        } else {
            return 'PULL RABBIT FROM TOP HAT'
        }
    }

    performShowStopper() {
        if (this.confident === true) {
        return 'WOW! The magician totally just sawed that person in half!'
        } else {
       return 'Oh no! Practice more before attempting this trick!'
        }
    }
    
}



module.exports = Magician; 
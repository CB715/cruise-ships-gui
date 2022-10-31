
class Ship {
    constructor(startingPort) {
    this.startingPort = 'Liverpool';
    this.passengers = 0;
    }
    boardShip() {
        this.passengers += 1;
    }
};


module.exports = Ship;
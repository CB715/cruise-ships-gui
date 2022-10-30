
class Ship {
    constructor(startingPort) {
    this.startingPort = startingPort;
    this.passengers = 0;
    }
    boardShip() {
        this.passengers += 1;
    }
};


module.exports = Ship;
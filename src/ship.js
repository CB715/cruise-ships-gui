
class Ship {
    constructor(startingPort) {
    this.currentPort = 'Liverpool';
    this.passengers = 0;
    };
    boardShip() {
        this.passengers += 1;
    };
    setSail() {
        this.currentPort = null;
    };
};

class Port {
    constructor(name) {
        this.name = name;
    };
};


module.exports = { Ship, Port };
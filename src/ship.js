
class Ship {
    constructor(currentPort) {
    this.currentPort = currentPort;
    this.passengers = 0;
    };

    setSail() {
        this.currentPort = null;
    };
};

module.exports = { Ship };
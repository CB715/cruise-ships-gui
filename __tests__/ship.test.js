/* globals describe it expect */
const { Ship, Port } = require('../src/ship');

describe('Creating a ship object', () => {
    it('return a new ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('should have a port', () => {
        const ship = new Ship();
        expect(ship.currentPort).toEqual('Liverpool');
    });
});

describe('Setting sail method of Ship object', () => {
    it('sets sail from the starting port', () => {
        const ship = new Ship();
        ship.setSail ();
        expect(ship.currentPort).toBeNull();
    });
});

describe('Creating a port object', () => {
    it('return a new port object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('gives the port a name', () => {
        const port = new Port('Belfast');
        expect(port.name).toEqual('Belfast');
    });
});


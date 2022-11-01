/* globals describe it expect */
const { Ship}  = require('../src/ship');
const { Port } = require('../src/port')

describe('Creating a ship object', () => {
    it('return a new ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('should have a port', () => {
        const port = new Port('New York');
        const ship = new Ship(port);
        expect(ship.currentPort).toEqual(port);
    });
});

describe('Setting sail method of Ship object', () => {
    it('sets sail from the starting port', () => {
        const port = new Port('New York');
        const ship = new Ship(port);
        ship.setSail ();
        expect(ship.currentPort).toBeNull();
    });
});
describe('Ship can dock at ports', () => {
    it('docks at a new port', () => {
        const port = new Port('New York');
        const ship = new Ship (port);
        const dover = new Port('Dover');
        ship.dock(dover.name);
        expect(ship.currentPort).toBe('Dover');
    });
});




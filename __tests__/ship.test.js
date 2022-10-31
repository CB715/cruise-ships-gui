/* globals describe it expect */
const Ship = require('../src/ship');

describe('Creating an object', () => {
    it('return a new ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('should have a starting point', () => {
        const ship = new Ship();
        expect(ship.startingPort).toEqual('Liverpool');
    });
});

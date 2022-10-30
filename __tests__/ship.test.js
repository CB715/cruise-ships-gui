const Ship = require('../src/ship');

describe('Creating an object', () => {
    it('return a new ship object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});
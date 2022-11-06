/* globals describe it expect */
const { Ship}  = require('../src/ship');
const { Port } = require('../src/port');
const { Itinerary } = require('../src/itinerary');

describe('Creating a ship object', () => {
    it('return a new ship object', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });

    it('should have a port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
    });

    it('should have a previous port set to null', () => {
        const port = new Port('New York');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.previousPort).toBeFalsy();
    });

    it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
        expect(dover.ships).toContain(ship);
    });
});

describe('Setting sail method of Ship object', () => {
    it('sets sail from the starting port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail ();
        expect(ship.currentPort).toBeNull();
        expect(dover.ships).not.toContain(ship);
    });

    it('cannot sail further than the last port in the itinerary array', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary');
    });
});

describe('Ship can dock at ports', () => {
    it('docks at a new port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship (itinerary);
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });

});




/* globals describe it expect */
const { Ship}  = require('../src/ship');
const { Port } = require('../src/port');
const { Itinerary } = require('../src/itinerary');


describe('Ship object instantiation, setting sail and docking', () => {
    describe('with ports and itinerary', () => {
        let ship;
        let dover;
        let calais;
        let itinerary;

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
          });

        it('returns a new ship object', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('should have a port', () => {
            expect(ship.currentPort).toBe(dover);
        });

        it('should have a previous port set to null', () => {
            expect(ship.previousPort).toBeFalsy();
        });

        it('gets added to port on instantiation', () => {
            expect(dover.ships).toContain(ship);
        });

        it('sets sail from the starting port', () => {
            ship.setSail ();

            expect(ship.currentPort).toBeNull();
            expect(dover.ships).not.toContain(ship);
        });
    
        it('cannot sail further than the last port in the itinerary array', () => {
            ship.setSail();
            ship.dock();

            expect(() => ship.setSail()).toThrowError('End of itinerary');

        });
        it('docks at a new port', () => {
            ship.setSail();
            ship.dock();
            
            expect(ship.currentPort).toBe(calais);
            expect(calais.ships).toContain(ship);
        });
    });
});


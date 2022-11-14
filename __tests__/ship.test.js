/* globals describe it expect */
const { Ship}  = require('../src/ship');

describe('Ship object instantiation, setting sail and docking', () => {
    describe('with ports and itinerary', () => {
        let dover;
        let calais;
       

        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
              };

              calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
              };

            itinerary = {
                ports: [dover, calais]
            };

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
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });

        it('sets sail from the starting port', () => {
            ship.setSail ();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });
    
        it('cannot sail further than the last port in the itinerary array', () => {
            ship.setSail();
            ship.dock();

            expect(() => ship.setSail()).toThrowError('End of itinerary');

        });
        it('docks at a new port', () => {
            ship.setSail();
            ship.dock();
            
            expect(ship.currentPort).toEqual(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
        });
    });
});


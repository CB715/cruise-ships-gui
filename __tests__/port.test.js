
const { Port } = require('../src/port');

describe('Creating a port object', () => {
    it('return a new port object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('gives the port a name', () => {
        const port = new Port('Belfast');
        expect(port.name).toEqual('Belfast');
    });
});

describe('Name of the group', () => {
        let dover;
        let ship;

    describe('port can have ships', () => {
        beforeEach(() => {
            dover = new Port('Dover');
            ship = jest.fn();
        });

        it('can add ships to the port', () => {
            dover.addShip(ship);
            
            expect(dover.ships).toContain(ship)
        });

        it('ships can remove ships from the port', () => {
            dover.addShip(ship);
            dover.removeShip(ship);
                
            expect(dover.ships).toEqual([]);
        });
    });
});    

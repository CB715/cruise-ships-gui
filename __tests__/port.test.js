
const { Port } = require('../src/port');

describe('Creating a port object', () => {
    it('return a new port object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('gives the port a name', () => {
        const port = new Port('Belfast');
        expect(port.name).toEqual('Belfast');
    });

    describe('port can have ships', () => {
        it('can add ships to the port', () => {
            const port = new Port('Dover');
            const ship = {};
            port.addShip(ship);
            expect(port.ships).toContain(ship)
        });
        it('ships can remove ships from the port', () => {
            const port = new Port('Dover');
            const newShip1 = {};
            const newShip2 = {};
            port.addShip(newShip1);
            port.addShip(newShip2);
            port.removeShip(newShip1);
            expect(port.ships).toEqual([newShip2]);
        });
    });
});
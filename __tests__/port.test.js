
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
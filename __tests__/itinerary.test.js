const { Itinerary }  = require('../src/itinerary');
const { Port } = require('../src/port');

describe('create a new itinerary object', () => {
   it('return a new itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
   }); 
   it('has a ports', () => {
     const dover = new Port('Dover');
     const calais = new Port('Calais');
     const itinerary = new Itinerary([dover, calais]);
     expect(itinerary.ports).toEqual([dover, calais]);
   });
});
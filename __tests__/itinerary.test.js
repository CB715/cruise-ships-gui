const { Itinerary }  = require('../src/itinerary');

describe('create a new itinerary object', () => {
   it('return a new itinerary object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
   }); 
   it('has a ports', () => {
     const dover = jest.fn();
     const calais = jest.fn();
     const itinerary = new Itinerary([dover, calais]);
     
     expect(itinerary.ports).toEqual([dover, calais]);
   });
});
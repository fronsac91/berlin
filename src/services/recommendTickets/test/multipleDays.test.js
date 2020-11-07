import { recommendTickets } from '../index';

let journey;

describe('2 days journey', () => {
  beforeAll(() => {
    journey = { "days": 2 };
  });
  describe('AND hotel is in either zone A or B', () => {
    beforeAll(() => {
      journey = { ...journey, "hotelZone": "B" };
    });
    describe('AND no guidebook is wanted', () => {
      beforeAll(() => {
        journey = { ...journey, "guidebookWanted": false };
      });
      describe('AND arriving to and leaving from zone A or B', () => {
        beforeAll(() => {
          journey = { ...journey, "arrivalAndDeparture": "A" };
        });
        it('should recommend 1 x CityTourCard 48 hours AB', () => { 
          const expectedData = [
            {
              "name": "CityTourCard 48 hours AB",
              "amount": 1
            }
          ];
    
          expect(recommendTickets(journey)).toEqual(expectedData);
        });
      });
      describe('AND arriving to and leaving from zone C', () => {
        beforeAll(() => {
          journey = { ...journey, "arrivalAndDeparture": "C" };
        });
        it('should recommend 1 x CityTourCard 48 hours AB + 2 x Extension ticket A/C', () => {  
          const expectedData = [
            {
              "name": "CityTourCard 48 hours AB",
              "amount": 1
            },
            {
              "name": "Extension ticket A/C",
              "amount": 2
            }
          ];
    
          expect(recommendTickets(journey)).toEqual(expectedData);
        });
      });
    });
    describe('AND guidebook is wanted', () => {
      beforeAll(() => {
        journey = { ...journey, "guidebookWanted": true };
      });
      describe('AND arriving to and leaving from zone A or B', () => {
        beforeAll(() => {
          journey = { ...journey, "arrivalAndDeparture": "A" };
        });
        it('should recommend 1 x CityTourCard 48 hours AB', () => { 
          const expectedData = [
            {
              "name": "WelcomeCard 48 hours AB",
              "amount": 1
            }
          ];
    
          expect(recommendTickets(journey)).toEqual(expectedData);
        });
      });
      describe('AND arriving to and leaving from zone C', () => {
        beforeAll(() => {
          journey = { ...journey, "arrivalAndDeparture": "C" };
        });
        it('should recommend 1 x CityTourCard 48 hours AB + 2 x Extension ticket A/C', () => {  
          const expectedData = [
            {
              "name": "WelcomeCard 48 hours AB",
              "amount": 1
            },
            {
              "name": "Extension ticket A/C",
              "amount": 2
            }
          ];
    
          expect(recommendTickets(journey)).toEqual(expectedData);
        });
      });
    })
  });
  describe('AND hotel is in zone C', () => {
    beforeAll(() => {
      journey = { ...journey, "hotelZone": "C" };
    });
    describe('AND no guidebook is wanted', () => {
      beforeAll(() => {
        journey = { ...journey, "guidebookWanted": false };
      });

      it('should recommend 1 x CityTourCard 48 hours ABC', () => { 
        const expectedData = [
          {
            "name": "CityTourCard 48 hours ABC",
            "amount": 1
          }
        ];
  
        expect(recommendTickets(journey)).toEqual(expectedData);
      });
    });
    describe('AND guidebook is wanted', () => {
      beforeAll(() => {
        journey = { ...journey, "guidebookWanted": true };
      });
      it('should recommend 1 x WelcomeCard 48 hours ABC', () => { 
        const expectedData = [
          {
            "name": "WelcomeCard 48 hours ABC",
            "amount": 1
          }
        ];
  
        expect(recommendTickets(journey)).toEqual(expectedData);
      });
    })
  })
})

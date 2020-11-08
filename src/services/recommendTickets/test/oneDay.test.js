import { recommendTickets } from '../index';

let journey;

describe('One-day business trip (no sightseeing)', () => {
  beforeAll(() => {
    journey = { "numberOfDays": 1, "purpose": "Business" };
  });
  describe('arriving to and leaving from the city', () => {
    beforeAll(() => {
      journey = { ...journey, "arrivalAndDeparture": "B" };
    });
    it('should recommend 2 x Single ticket AB', () => { 
      const expectedData = [
        {
          "name": "Single ticket AB",
          "amount": 2
        }
      ];
  
      expect(recommendTickets(journey)).toEqual(expectedData);
    });
  });
  describe('arriving to and leaving from outside the city', () => {
    beforeAll(() => {
      journey = { ...journey, "arrivalAndDeparture": "C" };
    });
    it('should recommend 2 x Single ticket ABC', () => {
      const expectedData = [
        {
          "name": "Single ticket ABC",
          "amount": 2
        }
      ];
  
      expect(recommendTickets(journey)).toEqual(expectedData);
    })
  })
});

describe('One-day sightseeing trip', () => {
  beforeAll(() => {
    journey = { "numberOfDays": 1, "purpose": "Sightseeing" };
  });
  describe('arriving to and leaving from the city', () => {
    beforeAll(() => {
      journey = { ...journey, "arrivalAndDeparture": "B" };
    });
    it('should recommend Day ticket AB', () => { 
      const expectedData = [
        {
          "name": "Day ticket AB",
          "amount": 1
        }
      ];
  
      expect(recommendTickets(journey)).toEqual(expectedData);
    });
  });
  describe('arriving to and leaving from outside the city', () => {
    beforeAll(() => {
      journey = { ...journey, "arrivalAndDeparture": "C" };
    });
    it('should recommend Day ticket ABC', () => {
      const expectedData = [
        {
          "name": "Day ticket ABC",
          "amount": 1
        }
      ];
  
      expect(recommendTickets(journey)).toEqual(expectedData);
    })
  })
});
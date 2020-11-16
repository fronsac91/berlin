import { recommendTickets } from '../index';

import {
  NUMBER_OF_DAYS,
  PURPOSE_OF_TRIP,
  ARRIVAL_AND_DEPARTURE_ZONE
} from '../../../constants/id';

import {
  PURPOSE_OF_TRIP_BUSINESS,
  PURPOSE_OF_TRIP_SIGHTSEEING,
  ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B,
  ARRIVAL_AND_DEPARTURE_ZONE_C
} from '../../../constants/options';

let journey;

describe('One-day business trip (no sightseeing)', () => {
  beforeAll(() => {
    journey = {
      [NUMBER_OF_DAYS]: 1,
      [PURPOSE_OF_TRIP]: PURPOSE_OF_TRIP_BUSINESS
    };
  });
  describe('arriving to and leaving from the city', () => {
    beforeAll(() => {
      journey = {
        ...journey,
        [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B
      };
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
      journey = {
        ...journey,
        [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_C
      };
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
    journey = {
      [NUMBER_OF_DAYS]: 1,
      [PURPOSE_OF_TRIP]: PURPOSE_OF_TRIP_SIGHTSEEING
    };
  });
  describe('arriving to and leaving from the city', () => {
    beforeAll(() => {
      journey = {
        ...journey,
        [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B
      };
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
      journey = {
        ...journey,
        [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_C
      };
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
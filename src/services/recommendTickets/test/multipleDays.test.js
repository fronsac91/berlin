import { recommendTickets } from '../index';

import {
  NUMBER_OF_DAYS,
  ARRIVAL_AND_DEPARTURE_ZONE,
  HOTEL_ZONE,
  GUIDEBOOK_WANTED
} from '../../../constants/id';

import {
  ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B,
  ARRIVAL_AND_DEPARTURE_ZONE_C,
  HOTEL_ZONE_A_OR_B,
  HOTEL_ZONE_C,
  GUIDEBOOK_WANTED_YES,
  GUIDEBOOK_WANTED_NO
} from '../../../constants/options';

let journey;

describe('2 days journey', () => {
  beforeAll(() => {
    journey = {
      [NUMBER_OF_DAYS]: 2
    };
  });
  describe('AND hotel is in either zone A or B', () => {
    beforeAll(() => {
      journey = {
        ...journey,
        [HOTEL_ZONE]: HOTEL_ZONE_A_OR_B
      };
    });
    describe('AND no guidebook is wanted', () => {
      beforeAll(() => {
        journey = {
          ...journey,
          [GUIDEBOOK_WANTED]: GUIDEBOOK_WANTED_NO
        };
      });
      describe('AND arriving to and leaving from zone A or B', () => {
        beforeAll(() => {
          journey = {
            ...journey,
            [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B
          };
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
          journey = {
            ...journey,
            [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_C
          };
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
        journey = {
          ...journey,
          [GUIDEBOOK_WANTED]: GUIDEBOOK_WANTED_YES
        };
      });
      describe('AND arriving to and leaving from zone A or B', () => {
        beforeAll(() => {
          journey = {
            ...journey,
            [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B
          };
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
          journey = {
            ...journey,
            [ARRIVAL_AND_DEPARTURE_ZONE]: ARRIVAL_AND_DEPARTURE_ZONE_C
          };
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
      journey = {
        ...journey,
        [HOTEL_ZONE]: HOTEL_ZONE_C
      };
    });
    describe('AND no guidebook is wanted', () => {
      beforeAll(() => {
        journey = {
          ...journey,
          [GUIDEBOOK_WANTED]: GUIDEBOOK_WANTED_NO
        };
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
        journey = {
          ...journey,
          [GUIDEBOOK_WANTED]: GUIDEBOOK_WANTED_YES
        };
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

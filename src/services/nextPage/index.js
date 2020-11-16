import {
  NAME,
  NUMBER_OF_DAYS,
  PURPOSE_OF_TRIP,
  ARRIVAL_AND_DEPARTURE_ZONE,
  HOTEL_ZONE,
  GUIDEBOOK_WANTED,
  RESULT
} from '../../constants/id';

import {
  HOTEL_ZONE_A_OR_B,
  HOTEL_ZONE_C
} from '../../constants/options';

export const nextPage = (journey) => {
  if (journey[NAME] === undefined) {
    return NAME;
  }

  if (journey[NUMBER_OF_DAYS] === undefined) {
    return NUMBER_OF_DAYS;
  }

  if (journey[NUMBER_OF_DAYS] === 1) {
    if (journey[PURPOSE_OF_TRIP] === undefined) {
      return PURPOSE_OF_TRIP;
    }
    if (journey[ARRIVAL_AND_DEPARTURE_ZONE] === undefined) {
      return ARRIVAL_AND_DEPARTURE_ZONE;
    }

    return RESULT;
  } else {
    if (journey[HOTEL_ZONE] === undefined) {
      return HOTEL_ZONE;
    }

    if (journey[HOTEL_ZONE] === HOTEL_ZONE_A_OR_B) {
      if (journey[GUIDEBOOK_WANTED] === undefined) {
        return GUIDEBOOK_WANTED;
      }
      
      if (journey[ARRIVAL_AND_DEPARTURE_ZONE] === undefined) {
        return ARRIVAL_AND_DEPARTURE_ZONE;
      }

      return RESULT;
    } else if (journey[HOTEL_ZONE] === HOTEL_ZONE_C) {
      if (journey[GUIDEBOOK_WANTED] === undefined) {
        return GUIDEBOOK_WANTED;
      }

      return RESULT;
    }
  }
}
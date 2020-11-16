import * as id from '../constants/id';
import * as option from '../constants/options';

export const questions = [
  {
    "id": id.NAME,
    "label": "What's your name?",
    "type": "text"
  },
  {
    "id": id.NUMBER_OF_DAYS,
    "label": "How many days are you planning to spend in Berlin?",
    "type": "number"
  },
  {
    "id": id.PURPOSE_OF_TRIP,
    "label": "What is the purpose of your trip?",
    "type": "button",
    "options": [
      option.PURPOSE_OF_TRIP_BUSINESS,
      option.PURPOSE_OF_TRIP_SIGHTSEEING
    ]
  },
  {
    "id": id.ARRIVAL_AND_DEPARTURE_ZONE,
    "label": "Which zone will you arrive to and leave from?",
    "type": "button",
    "options": [
      option.ARRIVAL_AND_DEPARTURE_ZONE_A_OR_B,
      option.ARRIVAL_AND_DEPARTURE_ZONE_C
    ]
  },
  {
    "id": id.HOTEL_ZONE,
    "label": "In which zone is your hotel located?",
    "type": "button",
    "options": [
      option.HOTEL_ZONE_A_OR_B, 
      option.HOTEL_ZONE_C
    ]
  },
  {
    "id": id.GUIDEBOOK_WANTED,
    "label": "Do you want a guidebook?",
    "type": "button",
    "options": [
      option.GUIDEBOOK_WANTED_YES,
      option.GUIDEBOOK_WANTED_NO
    ]
  }
];
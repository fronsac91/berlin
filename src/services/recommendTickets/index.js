import { ticketTypes } from "../../data/tickets";

import {
  NUMBER_OF_DAYS,
  PURPOSE_OF_TRIP,
  ARRIVAL_AND_DEPARTURE_ZONE,
  HOTEL_ZONE,
  GUIDEBOOK_WANTED
} from '../../constants/id';

import {
  PURPOSE_OF_TRIP_BUSINESS,
  PURPOSE_OF_TRIP_SIGHTSEEING,
  ARRIVAL_AND_DEPARTURE_ZONE_C,
  HOTEL_ZONE_C,
  GUIDEBOOK_WANTED_YES

} from '../../constants/options';

const filterTicketsByDays = (tickets, numberOfDays) => {
  return tickets.filter(ticket => ticket.days === parseInt(numberOfDays));
}

const filterTicketsByZones = (tickets, zones) => {
  return tickets.filter(ticket => ticket.zones === zones);
}

const filterTicketsByNumberOfTrips = (tickets) => {
  return tickets.filter(ticket => ticket.numberOfTrips && ticket.numberOfTrips === 1);
}

const filterTicketsByGuidebook = (tickets, guidebookWanted) => {
  let expectedValue;
  if (guidebookWanted === GUIDEBOOK_WANTED_YES) {
    expectedValue = true;
  } else {
    expectedValue = false;
  }

  return tickets.filter(ticket => ticket.guidebook === expectedValue);
}

const recommendForOneDay = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  if (journey[PURPOSE_OF_TRIP] === PURPOSE_OF_TRIP_BUSINESS) {
    filteredTickets = filterTicketsByNumberOfTrips(filteredTickets);
  } else if (journey[PURPOSE_OF_TRIP] === PURPOSE_OF_TRIP_SIGHTSEEING) {
    filteredTickets = filterTicketsByDays(ticketTypes, journey[NUMBER_OF_DAYS]);
  }
  if (journey[ARRIVAL_AND_DEPARTURE_ZONE] === ARRIVAL_AND_DEPARTURE_ZONE_C) {
    filteredTickets = filterTicketsByZones(filteredTickets, "ABC")[0];
  } else {
    filteredTickets = filterTicketsByZones(filteredTickets, "AB")[0];
  }
  return [
    {
      "amount": journey[PURPOSE_OF_TRIP] === PURPOSE_OF_TRIP_BUSINESS ? 2 : 1,
      "name": filteredTickets.name
    }
  ];
}

const recommendForMultipleDays = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  filteredTickets = filterTicketsByDays(filteredTickets, journey[NUMBER_OF_DAYS]);

  if (journey[HOTEL_ZONE] !== HOTEL_ZONE_C) {
    filteredTickets = filterTicketsByZones(filteredTickets, "AB");
  } else {
    filteredTickets = filterTicketsByZones(filteredTickets, "ABC");
  }

  filteredTickets = filterTicketsByGuidebook(filteredTickets, journey[GUIDEBOOK_WANTED]);

  let recommendedTickets = [
    {
      "amount": 1,
      "name": filteredTickets[0].name
    }
  ];

  if (journey[ARRIVAL_AND_DEPARTURE_ZONE] === ARRIVAL_AND_DEPARTURE_ZONE_C
    && journey[HOTEL_ZONE] !== HOTEL_ZONE_C) {
    recommendedTickets.push(
      {
        "amount": 2,
        "name": "Extension ticket A/C"
      }
    );
  }

  return recommendedTickets;
}

export const recommendTickets = (journey) => {
  let recommendedTickets = [];

  if (journey[NUMBER_OF_DAYS] === 1) {
    recommendedTickets = recommendForOneDay(journey);
  } else {
    recommendedTickets = recommendForMultipleDays(journey);
  }

  return recommendedTickets;
}
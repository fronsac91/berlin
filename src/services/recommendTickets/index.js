import { ticketTypes } from "../../data/tickets";

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
  if (guidebookWanted === "Yes") {
    expectedValue = true;
  } else {
    expectedValue = false;
  }

  return tickets.filter(ticket => ticket.guidebook === expectedValue);
}

const recommendForOneDay = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  if (journey.purpose === "Business") {
    filteredTickets = filterTicketsByNumberOfTrips(filteredTickets);
  } else if (journey.purpose === "Sightseeing") {
    filteredTickets = filterTicketsByDays(ticketTypes, journey.numberOfDays);
  }

  if (journey.arrivalAndDeparture === "C") {
    filteredTickets = filterTicketsByZones(filteredTickets, "ABC")[0];
  } else {
    filteredTickets = filterTicketsByZones(filteredTickets, "AB")[0];
  }

  return [
    {
      "amount": journey.purpose === "Business" ? 2 : 1,
      "name": filteredTickets.name
    }
  ];
}

const recommendForMultipleDays = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  filteredTickets = filterTicketsByDays(filteredTickets, journey.numberOfDays);

  if (journey.hotelZone !== "C") {
    filteredTickets = filterTicketsByZones(filteredTickets, "AB");
  } else {
    filteredTickets = filterTicketsByZones(filteredTickets, "ABC");
  }

  filteredTickets = filterTicketsByGuidebook(filteredTickets, journey.guidebookWanted);

  let recommendedTickets = [
    {
      "amount": 1,
      "name": filteredTickets[0].name
    }
  ];

  if (journey.arrivalAndDeparture === "C" && journey.hotelZone !== "C") {
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

  if (journey.numberOfDays === 1) {
    recommendedTickets = recommendForOneDay(journey);
  } else {
    recommendedTickets = recommendForMultipleDays(journey);
  }

  return recommendedTickets;
}
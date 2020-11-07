import { ticketTypes } from "../../data/tickets";

const filterTicketsByDays = (tickets, numberOfDays) => {
  return tickets.filter(ticket => ticket.days === numberOfDays);
}

const filterTicketsByZones = (tickets, zones) => {
  return tickets.filter(ticket => ticket.zones === zones);
}

const filterTicketsByNumberOfTrips = (tickets) => {
  return tickets.filter(ticket => ticket.numberOfTrips && ticket.numberOfTrips === 1);
}

const filterTicketsByGuidebook = (tickets, guidebookWanted) => {
  return tickets.filter(ticket => ticket.guidebook === guidebookWanted);
}

const recommendForOneDay = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  if (journey.tripType === "business") {
    filteredTickets = filterTicketsByNumberOfTrips(filteredTickets);
  } else if (journey.tripType === "sightseeing") {
    filteredTickets = filterTicketsByDays(ticketTypes, journey.days);
  }

  if (journey.arrivalAndDeparture === "C") {
    filteredTickets = filterTicketsByZones(filteredTickets, "ABC")[0];
  } else {
    filteredTickets = filterTicketsByZones(filteredTickets, "AB")[0];
  }

  return [
    {
      "amount": journey.tripType === "business" ? 2 : 1,
      "name": filteredTickets.name
    }
  ];
}

const recommendForMultipleDays = (journey) => {
  let filteredTickets = [ ...ticketTypes ];

  filteredTickets = filterTicketsByDays(ticketTypes, journey.days);

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

  if (journey.days === 1) {
    recommendedTickets = recommendForOneDay(journey);
  } else {
    recommendedTickets = recommendForMultipleDays(journey);
  }

  return recommendedTickets;
}
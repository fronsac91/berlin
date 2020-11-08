export const nextPage = (data) => {
//  if (Object.entries(data).length === 0) {
//    return "name";
//  }

  if (!data.name) {
    return "name";
  }

  if (!data.numberOfDays) {
    return "numberOfDays";
  }

  if (data.numberOfDays === 1) {
    if (!data.purpose) {
      return "purpose";
    }
    if (!data.arrivalAndDeparture) {
      return "arrivalAndDeparture";
    }

    return "result";
  } else {
    if (!data.hotelZone) {
      return "hotelZone";
    }

    if (data.hotelZone === "AB") {
      if (!data.guidebookWanted) {
        return "guidebookWanted";
      }
      
      if (!data.arrivalAndDeparture) {
        return "arrivalAndDeparture";
      }

      return "result";
    } else if (data.hotelZone === "C") {
      if (!data.guidebookWanted) {
        return "guidebookWanted";
      }

      return "result";
    }
  }
}
const nextQuestion = (state) => {
  if (Object.entries(state).length === 0) {
    return "name";
  }

  if (!state.days) {
    return "days";
  }

  if (state.days === 1) {
    if (!state.purpose) {
      return "purpose";
    }
    if (!state.arrivalAndDeparture) {
      return "arrivalAndDeparture";
    }
  } else {
    if (!state.hotelZone) {
      return "hotelZone";
    }

    if (state.hotelZone === "AB") {
      if (!state.guidebook) {
        return "guidebook";
      }
      
      if (!state.guidebook) {
        return "arrivalAndDeparture";
      }
    } else if (state.hotelZone === "C") {
      return "guidebook";
    }
  }
}
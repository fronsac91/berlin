import { Fragment, useState } from 'react';

import Page from './components/pages/Page';

const App = () => {
  const [ data, setData ] = useState({
    currentPage: "name",
    name: "",
    numberOfDays: null,
    purpose: null,
    arrivalAndDeparture: null,
    hotelZone: null,
    guidebookWanted: null
  });

  let currentPageElement;

  const props = { data, setData };

  switch(data.currentPage) {
    case ("name"):
      currentPageElement = <Page id="name" { ...props } />;
      break;
    case ("numberOfDays"):
      currentPageElement = <Page id="numberOfDays" { ...props } />;
      break;
    case ("purpose"):
      currentPageElement = <Page id="purpose" { ...props } />;
      break;
    case ("arrivalAndDeparture"):
      currentPageElement = <Page id="arrivalAndDeparture" { ...props } />;
      break;
    case ("hotelZone"):
      currentPageElement = <Page id="hotelZone" { ...props } />;
      break;
    case ("guidebookWanted"):
      currentPageElement = <Page id="guidebookWanted" { ...props } />;
      break;
    default:
      currentPageElement = null;
      break;
  }

  return (
    <Fragment>
      {currentPageElement}
      <p>Name: {data.name}</p>
      <p>NumberOfDays: {data.numberOfDays}</p>
      <p>Purpose: {data.purpose}</p>
      <p>ArrivalAndDeparture: {data.arrivalAndDeparture}</p>
      <p>HotelZone: {data.hotelZone}</p>
      <p>GuidebookWanted: {JSON.stringify(data.guidebookWanted)}</p>

    </Fragment>
  );
}

export default App;

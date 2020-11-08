import { useState } from 'react';

import Name from './components/pages/Name';
import NumberOfDays from './components/pages/NumberOfDays';
import Page from './components/pages/Page';
import Result from './components/pages/Result';

const App = () => {
  const [ data, setData ] = useState({
    currentPage: "name",
    journey: {
      purpose: null,
      arrivalAndDeparture: null,
      hotelZone: null,
      guidebookWanted: null
    }
  });

  const [ name, setName ] = useState("");
  const [ numberOfDays, setNumberOfDays ] = useState("");

  let currentPageElement;

  const props = {
    data, setData,
    name, setName,
    numberOfDays, setNumberOfDays };

  switch(data.currentPage) {
    case ("name"):
      currentPageElement = <Name { ...props } />;
      break;
    case ("numberOfDays"):
      currentPageElement = <NumberOfDays { ...props } />;
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
    case ("result"):
      currentPageElement = <Result data={data} />;
      break;
    default:
      currentPageElement = null;
      break;
  }

  return (
    <div className="form-box">
      <div className="logo-box">
        <i className="fas fa-user-tie"></i>
      </div>

      <h1>BVG ticket assistance</h1>

      {currentPageElement}
      
      <p>Name: {name}</p>
      <p>NumberOfDays: {numberOfDays}</p>
 {/*     <p>Purpose: {data.journey.purpose}</p>
      <p>ArrivalAndDeparture: {data.journey.arrivalAndDeparture}</p>
      <p>HotelZone: {data.journey.hotelZone}</p>
      <p>GuidebookWanted: {JSON.stringify(data.journey.guidebookWanted)}</p>
      <p>currentPage: {currentPage}</p>
  */}

  <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default App;

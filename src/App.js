import { useState } from 'react';

import Name from './components/pages/Name';
import NumberOfDays from './components/pages/NumberOfDays';
import Page from './components/pages/Page';
import Result from './components/pages/Result';

import { useForm } from './hooks/form-hook';

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

  const [ inputNameData, inputNameHandler, setInputNameData ] = useForm(
    {
      name: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const [ numberOfDays, setNumberOfDays ] = useState(1);

  let currentPageElement;

  const props = {
    data, setData,
    inputNameData, setInputNameData,
    numberOfDays, setNumberOfDays
   };

  switch(data.currentPage) {
    case ("name"):
      currentPageElement = <Name { ...props } inputNameHandler={inputNameHandler} />;
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
    </div>
  );
}

export default App;

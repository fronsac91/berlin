import { useState } from 'react';

import {
  NAME,
  NUMBER_OF_DAYS,
  PURPOSE_OF_TRIP,
  ARRIVAL_AND_DEPARTURE_ZONE,
  HOTEL_ZONE,
  GUIDEBOOK_WANTED,
  RESULT
} from './constants/id';

import Name from './components/pages/Name';
import NumberOfDays from './components/pages/NumberOfDays';
import Page from './components/pages/Page';
import Result from './components/pages/Result';

import { useForm } from './services/form/validators/form-hook';

const App = () => {
  const [ data, setData ] = useState({
    currentPage: NAME,
    journey: {
      [PURPOSE_OF_TRIP]: undefined,
      [ARRIVAL_AND_DEPARTURE_ZONE]: undefined,
      [HOTEL_ZONE]: undefined,
      [GUIDEBOOK_WANTED]: undefined
    }
  });

  const [ inputNameData, inputNameHandler, setInputNameData ] = useForm(
    {
      [NAME]: {
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
    case (NAME):
      currentPageElement = <Name { ...props } inputNameHandler={inputNameHandler} />;
      break;
    case (NUMBER_OF_DAYS):
      currentPageElement = <NumberOfDays { ...props } />;
      break;
    case (PURPOSE_OF_TRIP):
      currentPageElement = <Page id={PURPOSE_OF_TRIP} { ...props } />;
      break;
    case (ARRIVAL_AND_DEPARTURE_ZONE):
      currentPageElement = <Page id={ARRIVAL_AND_DEPARTURE_ZONE} { ...props } />;
      break;
    case (HOTEL_ZONE):
      currentPageElement = <Page id={HOTEL_ZONE} { ...props } />;
      break;
    case (GUIDEBOOK_WANTED):
      currentPageElement = <Page id={GUIDEBOOK_WANTED} { ...props } />;
      break;
    case (RESULT):
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

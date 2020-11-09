import React from 'react';

import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

const NumberOfDays = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const updatedJourney = { 
      ...props.data.journey,
      name: props.inputNameData.inputs.name.value,
      numberOfDays: props.numberOfDays
    };

    const nextPageId = nextPage(updatedJourney);
    const updatedData = { ...props.data, currentPage: nextPageId };

    props.setData(updatedData);
  };

  const question = questions.filter(q => q.id === "numberOfDays")[0];

  let questionElement = (
    <form onSubmit={submitHandler}>
      <label>
        {question.label}
        <input
          type="number"
          min="1"
          max="6"
          value={props.numberOfDays}
          onChange={(event) => props.setNumberOfDays(event.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );

  return questionElement;
}

export default NumberOfDays;
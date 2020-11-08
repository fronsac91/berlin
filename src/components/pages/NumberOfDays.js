import React from 'react';
import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

const NumberOfDays = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const updatedJourney = { 
      ...props.data.journey,
      name: props.name,
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
          type={question.type}
          onChange={(event) => props.setNumberOfDays(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

  return questionElement;
}

export default NumberOfDays;
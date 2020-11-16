import React from 'react';
import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

import { NAME, NUMBER_OF_DAYS } from '../../constants/id';

const Page = (props) => {
  const submitHandler = (event, option) => {
    event.preventDefault();

    const updatedJourney = {
      ...props.data.journey,
      [NAME]: props.inputNameData.inputs[NAME].value,
      [NUMBER_OF_DAYS]: props.numberOfDays,
      [props.id]: option
    };

    const nextPageId = nextPage(updatedJourney);
    const updatedData = { journey: { ...updatedJourney }, currentPage: nextPageId };

    props.setData(updatedData);
  };

  const question = questions.filter(q => q.id === props.id)[0];
  let questionElement = (
    <form>
        <label>{question.label}</label>
        {question.options.map(option => (
          <button
            key={`${question.id}-${option}`}
            type="submit"
            onClick={(e) => submitHandler(e, option)}
          >
            {option}
          </button>
        ))}
    </form>
  );

  return questionElement;
}

export default Page;
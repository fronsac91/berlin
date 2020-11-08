import React from 'react';
import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

const Page = (props) => {
  const submitHandler = (event, option) => {
    event.preventDefault();

    const updatedJourney = {
      ...props.data.journey,
      name: props.name,
      numberOfDays: props.numberOfDays,
      [props.id]: option
    };
console.log("Page updatedJourney: " + JSON.stringify(updatedJourney, null, 2));

    const nextPageId = nextPage(updatedJourney);
    const updatedData = { journey: { ...updatedJourney }, currentPage: nextPageId };
  console.log("Page updatedData: " + JSON.stringify(updatedData, null, 2));

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
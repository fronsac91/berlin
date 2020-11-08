import React from 'react';
import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

const Name = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const updatedJourney = {
      ...props.data.journey,
      name: props.name
    };
    const nextPageId = nextPage(updatedJourney);

    const updatedData = { ...props.data, currentPage: nextPageId };
    props.setData(updatedData);
  };

  const question = questions.filter(q => q.id === "name")[0];

  let questionElement = (
    <form onSubmit={submitHandler}>
      <label>
        {question.label}
        <input
          type={question.type}
          onChange={(event) => props.setName(event.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

  return questionElement;
}

export default Name;
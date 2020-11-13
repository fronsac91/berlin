import React from 'react';

import { nextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';
import Input from '../formElements/Input';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../utils/validators';

const Name = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const updatedJourney = {
      ...props.data.journey,
      name: props.inputNameData.inputs.name.value
    };
    const nextPageId = nextPage(updatedJourney);

    const updatedData = { ...props.data, currentPage: nextPageId };
    props.setData(updatedData);
  };

  const question = questions.filter(q => q.id === "name")[0];

  let questionElement = (
    <form onSubmit={submitHandler}>
      <Input
        id="name"
        type="text"
        label={question.label}
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
        errorText="Please enter a valid name."
        onInput={props.inputNameHandler}
      />
      <input type="submit" value="Next" disabled={!props.inputNameData.isValid} />
    </form>
  );

  return questionElement;
}

export default Name;
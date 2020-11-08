import React from 'react';
import { computeNextPage } from '../../services/nextPage';
import { questions } from '../../data/questions';

const Page = (props) => {
  const submitHandler = (event, id) => {
    event.preventDefault();
    let updatedData = { ...props.data, [id]: props.data[id] };
    const nextPageId = computeNextPage(updatedData);
    updatedData = { ...updatedData, currentPage: nextPageId };
    props.setData(updatedData);
  };

  const changeHandler = (event, id, type) => {
    let value = event.target.value;
    if (type === "number") {
      value = parseInt(value);
    }
    const updatedData = { ...props.data, [id]: value };
    props.setData(updatedData);
  };

  const buttonClickHandler = (event, id, option) => {
    event.preventDefault();

    let updatedData = { ...props.data, [id]: option };
    const nextPageId = computeNextPage(updatedData);

    updatedData = { ...updatedData, currentPage: nextPageId };
    props.setData(updatedData);
  };

  const question = questions.filter(q => q.id === props.id)[0];
  let questionElement;
  if (question.type === "button") {
    questionElement = (
      <form>
          <p>{question.label}</p>
          {question.options.map(option => (
            <button
              key={`${question.id}-${option}`}
              type="submit"
              onClick={(e) => buttonClickHandler(e, question.id, option)}
            >
              {option}
            </button>
          ))}
      </form>
    );
  } else {
    questionElement = (
      <form onSubmit={e => submitHandler(e, question.id)}>
        <label>
          {question.label}
          <input
            type={question.type}
            onChange={(e) => changeHandler(e, question.id, question.type)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  return questionElement;
}

export default Page;
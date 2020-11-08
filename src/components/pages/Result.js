import React, { Fragment } from 'react';
import { recommendTickets } from '../../services/recommendTickets';

const Result = (props) => {
  const tickets = recommendTickets(props.data.journey);
  const ticketsElement = tickets.map(ticket => (
    <p key={ticket.name}>{ticket.amount} x {ticket.name}</p>
  ));

  return (
    <Fragment>
      <p>Our recommendation:</p>
      {ticketsElement}
    </Fragment>
  );
}

export default Result;
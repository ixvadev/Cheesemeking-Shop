import React from 'react';

function Card({ cards, isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!cards || cards.length === 0) {
    return <p>No cards available.</p>;
  }

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <p>{card.name}</p>
          <p>{card.price}</p>
          <p>{card.oldPrice}</p>
          <img src={card.image} alt={card.name} />
          <p>{card.quantity}</p>
          <button>{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
}

export default Card;



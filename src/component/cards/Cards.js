import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card key={card.key} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;

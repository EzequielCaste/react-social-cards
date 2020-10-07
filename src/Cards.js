import React from "react";

import { Toolbar } from "./Toolbar";
import { cardInfo } from "./cardInfo";

export const Cards = () => {
  return (
    <>
      {cardInfo.map((card) => {
        return (
          <div key={card.title} className="card">
            <img alt="user profile" src={card.img} />
            <div className="text-container">
              <p>{card.description}</p>
              <h3>{card.title}</h3>
              <small>- {card.author}</small>
            </div>

            <Toolbar />
          </div>
        );
      })}
    </>
  );
};

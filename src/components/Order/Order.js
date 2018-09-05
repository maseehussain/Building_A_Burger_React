import React from "react";

import "./Order.css";

const order = props => {
  const ingredients = [];

  return (
    <div className="Order">
      <p>Ingredients: {props.ingredients}</p>
      <p>
        Price: <strong>£ {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;

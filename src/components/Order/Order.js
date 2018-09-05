import React from "react";

import "./Order.css";

const order = props => (
  <div className="Order">
    <p>Ingredients: Salad (1)</p>
    <p>
      Price: <strong>£ {props.price.toFixed(2)}</strong>
    </p>
  </div>
);

export default order;

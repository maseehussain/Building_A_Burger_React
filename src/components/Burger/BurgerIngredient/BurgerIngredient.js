import React from "react";
import PropTypes from "prop-types";

import "./BurgerIngredient.css";

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom" />;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case "salad":
        ingredient = <div className="Salad" />;
        break;
      case "bacon":
        ingredient = <div className="Bacon" />;
        break;
      case "cheese":
        ingredient = <div className="Cheese" />;
        break;
      case "beef":
        ingredient = <div className="Meat" />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;

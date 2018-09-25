import * as actionTypes from "./actionTypes";
import Axios from "../../axios-orders";

export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  };
};

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const initiateIngredients = () => {
  return dispatch => {
    Axios.get("https://react-masee-burger.firebaseio.com/ingredients.json")
      .then(res => {
        dispatch(setIngredients(res.data));
      })
      .catch(error => {});
  };
};

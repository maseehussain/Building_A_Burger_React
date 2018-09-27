import * as actionTypes from "../actions";

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {};
    default:
      return state;
  }
};

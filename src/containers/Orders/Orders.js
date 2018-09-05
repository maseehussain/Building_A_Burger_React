import React from "react";

import Order from "../../components/Order/Order";
import Axios from "../../axios-orders";

class Orders extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;

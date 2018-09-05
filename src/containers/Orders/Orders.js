import React from "react";

import Order from "../../components/Order/Order";
import Axios from "../../axios-orders";

class Orders extends React.Component {
  componentDidMount() {
    Axios.get("/orders.json").then(res => {});
  }

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

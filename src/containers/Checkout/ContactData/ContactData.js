import React from "react";

import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Masee Hussain",
        address: {
          street: "One Piece Street",
          postCode: "1000",
          country: "UK"
        },
        email: "masee@onepiece.com"
      },
      deliveryMethod: "fastest"
    };
    Axios.post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(err => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className="input"
            type="text"
            name="post code"
            placeholder="Post Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;

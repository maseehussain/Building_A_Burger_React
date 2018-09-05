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
    }
  };

  orderHandler = event => {
    console.log(this.props.ingredients);
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

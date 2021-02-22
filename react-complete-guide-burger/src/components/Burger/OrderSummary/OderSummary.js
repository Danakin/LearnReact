import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class
  // componentDidUpdate() {
  //   console.log("[OrderSummary] componentDidUpdate");
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingredientKey) => {
        return (
          <li key={ingredientKey}>
            <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>
            : {this.props.ingredients[ingredientKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <p>
          Total Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;

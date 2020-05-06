import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./components/Item";
import "./App.css";

class App extends Component {
  nameInput = React.createRef();
  priceInput = React.createRef();
  quantityInput = React.createRef();

  render() {
    const { invoice } = this.props;

    return (
      <div className="App">
        <h1>Status of invoice #1: {invoice.status()}</h1>
        {!invoice.is_paid && (
          <button onClick={invoice.markPaid}>Pay for it!</button>
        )}
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();

            invoice.itemList.add({
              name: this.nameInput.value,
              price: parseInt(this.priceInput.value, 10),
              quantity: parseFloat(this.quantityInput.value)
            });

            e.target.reset();

            this.nameInput.focus();
          }}
        >
          <div>
            <label htmlFor="name">
              Name:{" "}
              <input
                type="text"
                ref={input => (this.nameInput = input)}
                id="name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="quantity">
              Quantity:{" "}
              <input
                type="number"
                ref={input => (this.quantityInput = input)}
                id="quantity"
              />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price:{" "}
              <input
                type="text"
                ref={input => (this.priceInput = input)}
                id="price"
              />
            </label>
          </div>
          <div>
            <button type="submit">Add new Item</button>
          </div>
        </form>
        <hr />
        <ul>
          {invoice.itemList.items.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default observer(App);

import React from "react";
import { observer } from "mobx-react";

const Item = ({ item }) => (
  <li>
    {item.name}: {item.quantity} * ${item.price.toFixed(2)} = $
    {item.getTotal().toFixed(2)}
    <button onClick={item.decrement}>-</button>
    <button onClick={item.increment}>+</button>
  </li>
);

export default observer(Item);

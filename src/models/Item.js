import { types } from "mobx-state-tree";

const Item = types
  .model("Item", {
    quantity: types.number,
    price: types.number,
    name: types.string
  })
  .actions(self => ({
    increment() {
      self.quantity += 1;
    },
    decrement() {
      self.quantity -= 1;
    }
  }))
  .views(self => ({
    getTotal() {
      return self.quantity * self.price;
    }
  }));

export default Item;

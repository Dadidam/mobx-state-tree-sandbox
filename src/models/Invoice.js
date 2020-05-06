import { types } from "mobx-state-tree";
import ItemList from "./ItemList";

const Invoice = types
  .model("Invoice", {
    currency: types.string,
    is_paid: false, // will be converted to boolean by default
    itemList: types.optional(ItemList, { items: [] })
  })
  .actions(self => ({
    markPaid() {
      self.is_paid = true;
    }
  }))
  .views(self => ({
    status() {
      return self.is_paid ? "Paid" : "Not yet Paid";
    }
  }));

export default Invoice;

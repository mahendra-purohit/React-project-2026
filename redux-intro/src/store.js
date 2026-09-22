import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";
const store = configureStore({
  reducer: { accountDetails: accountReducer, customerDetails: CustomerReducer },
});
export default store;

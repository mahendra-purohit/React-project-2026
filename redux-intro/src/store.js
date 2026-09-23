import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";
const store = configureStore({
  reducer: { accountDetails: accountReducer, customerDetails: CustomerReducer },
});
export default store;

/*  When you write export default accountSlice.reducer; at the bottom of your slice file,
 you are exporting the automatically generated reducer function. 
 When you import it in your store.js file, you can name it whatever you like 
 (in this case, you named it accountReducer). */

/*  When you use createSlice, Redux Toolkit automatically takes all the functions 
 you wrote inside the reducers object (deposit, withdraw, requestLoan, etc.)
  and combines them into one single reducer function. This function is stored 
  inside accountSlice.reducer.  */

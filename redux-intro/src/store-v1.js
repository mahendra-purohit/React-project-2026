import { combineReducers, createStore } from "redux";
const AccountinitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const CustomerinitianState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};
function accountReducer(state = AccountinitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
function CustomerReducer(state = CustomerinitianState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/update":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}
const root = combineReducers({
  accountDetails: accountReducer,
  customerDetails: CustomerReducer,
});
const store = createStore(root);
// store.dispatch({ type: "account/deposit", payload: 900 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 200, purpose: "buy car" },
// });
// console.log(store.getState());

////create a action
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
store.dispatch(deposit(500));
console.log(store.getState());
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
store.dispatch(withdraw(200));
console.log(store.getState());
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
store.dispatch(requestLoan(400, "car buying"));
console.log(store.getState());
function payLoan() {
  return {
    type: "account/payLoan",
  };
}
store.dispatch(payLoan());
console.log(store.getState());

function CreateCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date() },
  };
}
store.dispatch(CreateCustomer("mahendra", 8776777));
console.log(store.getState());

function UpdateCustomer(fullName) {
  return {
    type: "customer/update",
    payload: { fullName },
  };
}
store.dispatch(UpdateCustomer("jonas"));
console.log(store.getState());

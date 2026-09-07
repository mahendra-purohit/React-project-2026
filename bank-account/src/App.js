import { useReducer } from "react";
import "./index.css";
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  depositAmount: "",
  withdrawAmount: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "setDeposit":
      return { ...state, depositAmount: action.payload };
    case "deposit":
      const amount = Number(state.depositAmount);
      if (amount < 0) return state;
      return {
        ...state,
        balance: state.balance + amount,
        depositAmount: "",
      };
    case "setWithdraw":
      return { ...state, withdrawAmount: action.payload };
    case "withdraw":
      const withdrawAmount = Number(state.withdrawAmount);
      if (state.balance < withdrawAmount) return state;

      return {
        ...state,
        balance: state.balance - withdrawAmount,
        withdrawAmount: "",
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
    default:
      throw new Error("unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive, depositAmount, withdrawAmount }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <input
          type="text"
          value={depositAmount}
          onChange={(e) =>
            dispatch({ type: "setDeposit", payload: Number(e.target.value) })
          }
          disabled={!isActive}
        />
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!isActive}
        >
          Deposit amount
        </button>
      </p>
      <input
        type="text"
        value={withdrawAmount}
        onChange={(e) =>
          dispatch({ type: "setWithdraw", payload: Number(e.target.value) })
        }
        disabled={!isActive}
      />
      <button
        onClick={() => dispatch({ type: "withdraw" })}
        disabled={!isActive}
      >
        Withdraw amount
      </button>
      <p></p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

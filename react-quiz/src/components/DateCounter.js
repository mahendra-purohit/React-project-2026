import { useReducer } from "react";

function reducer(state, action) {
  //console.log(state, action);
  if (action.type === "inc")
    return { ...state, count: state.count + state.step };
  if (action.type === "dec")
    return { ...state, count: state.count - state.step };
  if (action.type === "setCount") return { ...state, count: action.payload };
  if (action.type === "setStep") return { ...state, step: action.payload };
  if (action.type === "reset") return { count: 0, step: 1 };
}
function DateCounter() {
  const intitialstate = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, intitialstate);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" }); //sendind action to reducer function
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input
          value={count}
          onChange={(e) =>
            dispatch({
              type: "setCount",
              payload: Number(e.target.value),
            })
          }
        />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

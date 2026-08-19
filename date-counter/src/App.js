/////////////////////////////////////////first version////////////////
import { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const date = new Date();
//   date.setDate(date.getDate() + count);
//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <span>Steps:{step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>
//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count:{count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p>
//         <span>
//           {count === 0
//             ? `Today is:${date.toLocaleDateString()}`
//             : count > 0
//               ? `${count} days from today is:${date.toLocaleDateString()}`
//               : `${Math.abs(count)} days ago was:${date.toLocaleDateString()}`}
//         </span>
//       </p>
//     </div>
//   );
// }
/////////////////////////////////////////second version////////////////

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>step:{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? `Today is:${date.toLocaleDateString()}`
            : count > 0
              ? `${count} days from today is:${date.toLocaleDateString()}`
              : `${Math.abs(count)} days ago was:${date.toLocaleDateString()}`}
        </span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

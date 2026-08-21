import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onselectPercentage={setPercentage1}
      >
        How did you like the service
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onselectPercentage={setPercentage2}
      >
        How did you friend like the service
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much the bill</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onselectPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onselectPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      you pay {bill + tip}Rs({bill} + {tip} tip)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

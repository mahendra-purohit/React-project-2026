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

///////////////////calculate student marks//////////////////////////////
// export default function App() {
//   return (
//     <div className="marks">
//       <CalculateMarks />
//     </div>
//   );
// }
// function CalculateMarks() {
//   const [name, setName] = useState("");
//   const [english, setEnglish] = useState("");
//   const [math, setMath] = useState("");
//   const [science, setScience] = useState("");
//   const totalMarks = english + math + science;
//   const allSubjectsFilled = english !== "" && math !== "" && science !== "";
//   const percentage = allSubjectsFilled
//     ? Number(((totalMarks / 300) * 100).toFixed(2))
//     : 0;
//   const status = percentage > 40 ? "Pass" : "Fail";
//   function handleReset() {
//     setName("");
//     setEnglish("");
//     setMath("");
//     setScience("");
//   }
//   return (
//     <div>
//       <StudentName name={name} onSetName={setName} />
//       <Marks
//         science={science}
//         onsetScience={setScience}
//         math={math}
//         onsetMath={setMath}
//         english={english}
//         onsetEnglish={setEnglish}
//         totalMarks={totalMarks}
//         percentage={percentage}
//         allSubjectsFilled={allSubjectsFilled}
//       />

//       {allSubjectsFilled && (
//         <Output
//           name={name}
//           totalMarks={totalMarks}
//           percentage={percentage}
//           status={status}
//         />
//       )}
//       <Reset onReset={handleReset} />
//     </div>
//   );
// }
// function StudentName({ name, onSetName }) {
//   return (
//     <div>
//       <label>Student Name:</label>
//       <input
//         type="text"
//         placeholder="enter your name"
//         value={name}
//         onChange={(e) => onSetName(e.target.value)}
//       />
//     </div>
//   );
// }
// function Marks({
//   english,
//   math,
//   science,
//   onsetEnglish,
//   onsetMath,
//   onsetScience,
//   totalMarks,
//   percentage,
//   allSubjectsFilled,
// }) {
//   return (
//     <div>
//       <label>English(out of 100):</label>
//       <input
//         type="text"
//         value={english}
//         onChange={(e) => onsetEnglish(Number(e.target.value))}
//       />
//       <label>Math(out of 100):</label>
//       <input
//         type="text"
//         value={math}
//         onChange={(e) => onsetMath(Number(e.target.value))}
//       />
//       <label>Science(out of 100):</label>
//       <input
//         type="text"
//         value={science}
//         onChange={(e) => onsetScience(Number(e.target.value))}
//       />
//       <label>Total Marks(out of 300):</label>
//       <input type="text" value={allSubjectsFilled ? totalMarks : ""} readOnly />
//       <label>Percentage %:</label>
//       <input type="text" value={percentage} readOnly />
//     </div>
//   );
// }
// function Output({ name, totalMarks, percentage, status }) {
//   return (
//     <div>
//       <span>
//         {name} your Total marks is {totalMarks} and your percentage is{" "}
//         {percentage}%
//       </span>
//       <span>Result :{status}</span>
//     </div>
//   );
// }
// function Reset({ onReset }) {
//   return <button onClick={onReset}>Reset</button>;
// }

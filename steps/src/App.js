import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your income 🤑",
];
export default function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setstep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setstep((s) => s + 1); //update the state based on current state(best way)
    //if (step < 3) setstep(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step Number :{step} {messages[step - 1]}
          </p>
          <div className="buttons">
            {/* first method <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
            {/* ////////now we make this button reusable and use children prop////////////  */}
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

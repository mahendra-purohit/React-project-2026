import { useState } from "react";
import "./index.css";

const post = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={post} />
    </div>
  );
}
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((data, i) => (
        <AccordionItem title={data.title} text={data.text} num={i} />
      ))}
    </div>
  );
}
function AccordionItem({ title, text, num }) {
  const [isOpen, setisOpen] = useState(false);
  function handleToggle() {
    setisOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 5 ? `0${num + 1}` : ""}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

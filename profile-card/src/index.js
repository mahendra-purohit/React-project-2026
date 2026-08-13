import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

//////////////////////////////First method////////////////////////
// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }
// function Avatar() {
//   return <img className="avatar" src="demo.avif" alt="profile" />;
// }
// function Intro() {
//   return (
//     <div>
//       <h1>Mahendra Purohit</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </div>
//   );
// }
// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill language="React" emoji="💪" color="red" />
//       <Skill language="Php" emoji="💪" color="orange" />
//       <Skill language="Git & gitHub" emoji="💪" color="green" />
//       <Skill language="Javascript" emoji="💪" color="yellow" />
//       <Skill language="Node.js" emoji="👶" color="pink" />
//     </div>
//   );
// }
// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.language}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

//////////////////////////////Second method using map and props destructuring //////////////////
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="demo.avif" alt="profile" />;
}
function Intro() {
  return (
    <div>
      <h1>Mahendra Purohit</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"} {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>,
);

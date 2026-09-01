import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import App from "./App-v1";

// function Test() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="red"
//         maxRating={10}
//         onsetmovieRating={setmovieRating}
//       />
//       <p>You have {movieRating} rating</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/*<StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
      size={48}
    /> */}
    {/*    <Test /> */}
  </>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
// //////////////simple way to render all pizza items/////////////////////////////
// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="header">
//       <h1 style={{}}>Fast React Pizza Company</h1>
//     </header>
//   );
// }
// function Menu() {
//   return (
//     /* here Menu component is the parent element and Pizza component      */

//     <main className="menu">
//       <h2>Our Menu</h2>
//       <ul className="pizzas">
//         <Pizza
//           name="Pizza Spinaci"
//           ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//           photoName="pizzas/spinaci.jpg"
//           price={12}
//         />

//         <Pizza
//           name="Pizza Margherita"
//           ingredients="Tomato and mozarella"
//           photoName="pizzas/margherita.jpg"
//           price={10}
//         />
//         <Pizza
//           name="Pizza Salamino"
//           ingredients="Tomato, mozarella, and pepperoni"
//           photoName="pizzas/salamino.jpg"
//           price={15}
//         />
//         <Pizza
//           name="Pizza Prosciutto"
//           ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
//           photoName="pizzas/prosciutto.jpg"
//           price={18}
//         />
//       </ul>
//     </main>
//   );
// }
// function Pizza(props) {
//   //console.log(props);
//   return (
//     <li className="pizza">
//       <img src={props.photoName} alt={props.name} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredients}</p>
//         <span>{props.price}</span>
//       </div>
//     </li>
//   );
// }
// function Footer() {
//   /*const hour = new Date().getHours();
//   const openHour = 19;
//   const closeHour = 22;
//   const IsOpen = hour >= openHour && hour <= closeHour;
//   console.log(IsOpen);
//   if (hour >= openHour && hour <= closeHour) alert("open");
//   else alert("close"); */

//   return (
//     <footer className="footer">
//       {new Date().toLocaleTimeString()} We are currently open
//     </footer>
//   );
// }

// //////////////Render all pizza items using map method///////////////////
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  );
}
function Menu() {
  return (
    /* here Menu component is the parent element of Pizza component      */

    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cusine.6 creative dishes to choose from.All from our
        stone oven.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          //first way <Pizza
          //   name={pizza.name}
          //   photoName={pizza.photoName}
          //   price={pizza.price}
          //   ingredients={pizza.ingredients}
          // />

          ////second way
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}
function Pizza({ pizzaObj }) {
  //props destructuring

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* first way <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div> */}

      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 11;
  const closeHour = 22;
  const IsOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* always use ternary operator instead if/else   */}
      {IsOpen ? (
        <Order closehours={closeHour} openhours={openHour} />
      ) : (
        <div className="order">
          <p>we are closed now</p>
        </div>
      )}
    </footer>
  );
}

function Order({ closehours, openhours }) {
  //{ closehours, openhours } this is called props destructuring
  return (
    <div className="order">
      <p>
        We are open from {openhours}:00 to {closehours}:00 You can book order
        now
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>,
);

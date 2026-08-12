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

// //////////////Render all list items using map method///////////////////
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

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          //first way <Pizza
          //   name={pizza.name}
          //   photoName={pizza.photoName}
          //   price={pizza.price}
          //   ingredients={pizza.ingredients}
          // />
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}
function Pizza(props) {
  //if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      {/* first way <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div> */}

      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 22;
  const IsOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {IsOpen ? (
        <div className="order">
          <p>we are Open Now you can book order</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <div className="order">
          <p>we are closed now</p>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>,
);

import { useContext, useState, createContext, useEffect } from "react";

const CitiesContext = createContext();
const BASE_URL = "http://localhost:8000";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentCity, setcurrentCity] = useState({});
  useEffect(function () {
    async function getCities() {
      try {
        setisLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch {
        alert("there was an error");
      } finally {
        setisLoading(false);
      }
    }
    getCities();
  }, []);

  //when we click on particular city then get city data and display that data on City component
  async function getCity(id) {
    try {
      setisLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      setcurrentCity(data);
    } catch {
      alert("there was an error");
    } finally {
      setisLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      setisLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert("there was an error");
    } finally {
      setisLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setisLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("there was an error deleting city");
    } finally {
      setisLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
//custom hook
function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { CitiesProvider, useCities };

/////////////////we can use useReduer instead useState /////////////////////////////////
// import { useContext, createContext, useEffect, useReducer } from "react";

// const CitiesContext = createContext();
// const BASE_URL = "http://localhost:8000";
// const initialstate = {
//   cities: [],
//   isLoading: false,
//   currentCity: {},
//   error: "",
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "loading":
//       return { ...state, isLoading: true };
//     case "cities/loaded":
//       return { ...state, isLoading: false, cities: action.payload };
//     case "city/loaded":
//       return { ...state, isLoading: false, currentCity: action.payload };
//     case "city/created":
//       return {
//         ...state,
//         isLoading: false,
//         cities: [...state.cities, action.payload],
//       };
//     case "city/deleted":
//       return {
//         ...state,
//         isLoading: false,
//         cities: state.cities.filter((city) => city.id !== action.payload),
//       };
//     case "rejected":
//       return { ...state, isLoading: false, error: action.payload };
//     default:
//       throw new Error("unknown");
//   }
// }
// function CitiesProvider({ children }) {
//   const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
//     reducer,
//     initialstate,
//   );
//   useEffect(function () {
//     async function getCities() {
//       dispatch({ type: "loading" });
//       try {
//         const res = await fetch(`${BASE_URL}/cities`);
//         const data = await res.json();
//         dispatch({ type: "cities/loaded", payload: data });
//       } catch {
//         dispatch({ type: "rejected", payload: "eror loading data" });
//       }
//     }
//     getCities();
//   }, []);

//   //when we click on particular city then get city data and display that data on City component
//   async function getCity(id) {
//     dispatch({ type: "loading" });
//     try {
//       const res = await fetch(`${BASE_URL}/cities/${id}`);
//       const data = await res.json();

//       dispatch({ type: "city/loaded", payload: data });
//     } catch {
//       dispatch({ type: "rejected", payload: "eror loading data" });
//     }
//   }
//   async function createCity(newCity) {
//     dispatch({ type: "loading" });
//     try {
//       const res = await fetch(`${BASE_URL}/cities`, {
//         method: "POST",
//         body: JSON.stringify(newCity),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       dispatch({ type: "city/created", payload: data });
//     } catch {
//       dispatch({ type: "rejected", payload: "eror loading data" });
//     }
//   }
//   async function deleteCity(id) {
//     dispatch({ type: "loading" });
//     try {
//       await fetch(`${BASE_URL}/cities/${id}`, {
//         method: "DELETE",
//       });

//       dispatch({ type: "city/deleted", payload: id });
//     } catch {
//       dispatch({ type: "rejected", payload: "eror loading data" });
//     }
//   }

//   return (
//     <CitiesContext.Provider
//       value={{
//         cities,
//         isLoading,
//         currentCity,
//         getCity,
//         createCity,
//         deleteCity,
//         error,
//       }}
//     >
//       {children}
//     </CitiesContext.Provider>
//   );
// }
// //custom hook
// function useCities() {
//   const context = useContext(CitiesContext);
//   return context;
// }

// export { CitiesProvider, useCities };

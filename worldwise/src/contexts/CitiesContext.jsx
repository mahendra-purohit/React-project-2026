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

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
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

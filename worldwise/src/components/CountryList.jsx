import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, city) => {
    // if (!arr.map((el) => el.country).includes(city.country))
    //   return [...arr, { country: city.country, emoji: city.emoji }];
    // else return arr;

    // Check if the country is already in our accumulated array
    const exists = arr.some((el) => el.country === city.country);

    if (!exists) {
      arr.push({ country: city.country, emoji: city.emoji });
    }

    return arr;
  }, []);
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
}
export default CountryList;

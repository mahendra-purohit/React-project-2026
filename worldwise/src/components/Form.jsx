// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "./Button";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Buttonback from "./Buttonback";
import { useNavigate, useSearchParams } from "react-router-dom";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { useCities } from "../contexts/CitiesContext";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoadingGeoCoding, setisLoadingGeoCoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  //get the latitude and longitude of current selected city from the url with the help of query string
  const [searchParams] = useSearchParams(); //A React Router hook that reads the query parameters from the URL
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const { createCity } = useCities();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setisLoadingGeoCoding(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
          );
          const data = await res.json();
          if (!data.countryCode) throw new Error("please click somewhere else");
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(data.countryCode.toLowerCase());
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setisLoadingGeoCoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng],
  );
  function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    createCity(newCity);
    navigate("/app/cities");
  }
  if (!lat && !lng) return <Message message="start clicking map " />;
  if (geocodingError) return <Message message={geocodingError} />;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={`fi fi-${emoji} ${styles.flag}`}></span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
          selected={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Buttonback />
      </div>
    </form>
  );
}

export default Form;

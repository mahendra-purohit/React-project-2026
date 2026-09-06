import { useEffect, useState } from "react";
//custome hook
const key = "9f8fe70";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setisLoading(true);
          setError("");
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal },
          );
          if (!response.ok) throw new Error("");
          const data = await response.json();
          if (data.Response === "False") throw new Error("Movie Not Found");

          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setisLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      //cleanup function only send request the whole string
      return function () {
        controller.abort();
      };
    },
    [query],
  );
  return { movies, isLoading, error };
}

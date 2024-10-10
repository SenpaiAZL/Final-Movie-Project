import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const MovieFetcher = ({ onFetch }) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiRDT = import.meta.env.VITE_TMDB_TOKEN;
  const accId = import.meta.env.VITE_TMDB_ACC_KEY;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieList = async () => {
      setLoading(true);
      try {
        let header = {
          accept: "application/json",
          Authorization: "Bearer " + apiRDT + "",
        };
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
          {
            headers: header,
          }
        );
        const movieList = response.data;
        onFetch(movieList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieList();
  }, [onFetch, accId, apiKey, apiRDT]);

  return loading ? <div className="spinner"></div> : null;
};
MovieFetcher.propTypes = {
  onFetch: PropTypes.func.isRequired,
};

export default MovieFetcher;

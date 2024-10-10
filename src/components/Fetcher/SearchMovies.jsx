import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSearch } from "../../Store/Action/movieAction";

const FetcherSearch = ({ query }) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiRDT = import.meta.env.VITE_TMDB_TOKEN;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchSearch = useCallback(async () => {
    setLoading(true);
    try {
      const header = {
        accept: "application/json",
        Authorization: `Bearer ${apiRDT}`,
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`,
        { headers: header }
      );
      const movieData = response.data;
      console.log(movieData);
      console.log(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
      );
      dispatch(setSearch(movieData));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch, apiKey, apiRDT, query]);

  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  return loading ? <div className="spinner"></div> : null; // Loading spinner or your component
};

FetcherSearch.propTypes = {};

export default FetcherSearch;

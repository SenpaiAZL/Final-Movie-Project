import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../Store/Action/detailAction";

const DetailMovieFetcher = ({ id, type }) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const apiRDT = import.meta.env.VITE_TMDB_TOKEN;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = useCallback(async () => {
    setLoading(true);
    try {
      const header = {
        accept: "application/json",
        Authorization: `Bearer ${apiRDT}`,
      };
      let response;
      if (type == "movie") {
        response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
          { headers: header }
        );
      } else if (type == "tv") {
        response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`,
          { headers: header }
        );
      }
      const movieData = response.data;
      console.log(movieData);
      console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      dispatch(setMovieDetail(movieData));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch, apiKey, apiRDT, id, type]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return loading ? <div className="spinner"></div> : null; // Loading spinner or your component
};

DetailMovieFetcher.propTypes = {
  id: PropTypes.string.isRequired, // Define the prop type for id
};

export default DetailMovieFetcher;

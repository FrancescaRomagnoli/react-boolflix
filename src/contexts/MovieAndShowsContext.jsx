import { createContext, useContext, useState } from "react";

// # movies and tv shows contexts
const MoviesAndShowsContext = createContext();

// # export of movie and tv shows context

export const useMovieAndShowsContext = () => {
  return useContext(MoviesAndShowsContext);
};

// # export of context provider

export const MoviesAndShowsContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultMovies, setResultMovies] = useState([]);
  const [resultShows, setResultShows] = useState([]);

  // url construction
  const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;
  const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;

  const constructedMovieUrl = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=it-IT`;

  const constructedShowUrl = `${apiUrl}search/tv?api_key=${apiKey}&query=${searchTerm}&language=it-IT`;

  // search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();

    // fetch movies
    fetch(`${constructedMovieUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setResultMovies(data.results);
        console.log(data.results);
      });

    // fetch shows
    fetch(`${constructedShowUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setResultShows(data.results);
        console.log(data.results);
      });
  };

  // return

  return (
    <MoviesAndShowsContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        resultMovies,
        resultShows,
        handleSearch,
        handleSearchButton,
      }}
    >
      {children}
    </MoviesAndShowsContext.Provider>
  );
};

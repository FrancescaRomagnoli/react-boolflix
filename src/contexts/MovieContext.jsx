import { createContext, useContext, useState } from "react";

// # movies and tv shows contexts
const MoviesContext = createContext();

// # export of movie context

export const useMovieContext = () => {
  return useContext(MoviesContext);
};

// # export of context provider

export const MoviesContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultMovies, setResultMovies] = useState([]);

  // url construction
  const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;
  const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;

  const constructedUrl = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=it-IT`;

  // search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();

    // fetch
    fetch(`${constructedUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setResultMovies(data.results);
        console.log(data.results);
      });
  };

  // return

  return (
    <MoviesContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        resultMovies,
        handleSearch,
        handleSearchButton,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

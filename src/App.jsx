import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultMovies, setResultMovies] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();
    console.log(searchTerm);

    const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;
    const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;

    const url = `${apiUrl}search/movie?api_key=${apiKey}&query=${searchTerm}&language=it-IT`;
    console.log(url);

    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setResultMovies(data.results);
        console.log(data.results);
      });
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div>
            <div>boolflix</div>
          </div>
          <div>
            <form onSubmit={handleSearchButton}>
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="search..."
              />
              <button>search</button>
            </form>
          </div>
        </div>
      </header>
      <main>
        <div>
          {resultMovies.length > 0 ? (
            resultMovies.map((movie) => {
              return (
                <div>
                  <ul>
                    <li>{movie.title}</li>
                    <li>{movie.original_title}</li>
                    <li>{movie.original_language}</li>
                    <li>{movie.vote_average}</li>
                  </ul>
                </div>
              );
            })
          ) : (
            <>
              <div>Search something</div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

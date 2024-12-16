import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState("");

  const apiUrl = "https://api.themoviedb.org/3/search/movie?";

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
        console.log(data);
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
    </>
  );
}

export default App;

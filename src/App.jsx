import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();
    console.log(searchTerm);
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
                onChange={handleSearchTerm}
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

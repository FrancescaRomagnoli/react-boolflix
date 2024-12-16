import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <div className="header-container">
          <div>
            <div>boolflix</div>
          </div>
          <div>
            <form>
              <input type="search" />
              <button>search</button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

import { MoviesContextProvider } from "./contexts/MovieContext.jsx";

import Header from "./components/Header";
import Main from "./components/Main.jsx";

function App() {
  return (
    <MoviesContextProvider>
      <Header />
      <Main />
    </MoviesContextProvider>
  );
}

export default App;

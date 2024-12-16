import { MoviesAndShowsContextProvider } from "./contexts/MovieAndShowsContext.jsx";

import Header from "./components/Header";
import Main from "./components/Main.jsx";

function App() {
  return (
    <MoviesAndShowsContextProvider>
      <Header />
      <Main />
    </MoviesAndShowsContextProvider>
  );
}

export default App;

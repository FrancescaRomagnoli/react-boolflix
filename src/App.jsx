import { MediaContextProvider } from "./contexts/GlobalContext.jsx";

import Header from "./components/Header";
import Main from "./components/Main.jsx";

function App() {
  return (
    <MediaContextProvider>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </MediaContextProvider>
  );
}

export default App;

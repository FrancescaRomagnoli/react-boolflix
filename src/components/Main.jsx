import { useMediaContext } from "../contexts/GlobalContext";
import Section from "./Section";

export default function Main() {
  const { resultMovies, resultShows, searchTerm } = useMediaContext();

  return (
    <>
      <main>
        {resultMovies.length > 0 || resultShows.length > 0 ? (
          <>
            <Section mediaList={resultMovies} sectionTitle={"Movies"} />
            <Section mediaList={resultShows} sectionTitle={"TV Shows"} />
          </>
        ) : (
          <p className="text-muted load-text"> Try the search bar!</p>
        )}
      </main>
    </>
  );
}

import { useMediaContext } from "../contexts/GlobalContext";
import Section from "./Section";

export default function Main() {
  const { resultMovies, resultShows, isLoading } = useMediaContext();

  return (
    <>
      <main>
        {isLoading ? (
          <div className="d-flex justify-center">
            <div className="loader"></div>
          </div>
        ) : resultMovies.length > 0 || resultShows.length > 0 ? (
          <>
            <Section mediaList={resultMovies} sectionTitle={"Movies"} />
            <Section mediaList={resultShows} sectionTitle={"TV Shows"} />
          </>
        ) : (
          <p className="text-muted page-load-text"> Try the search bar!</p>
        )}
      </main>
    </>
  );
}

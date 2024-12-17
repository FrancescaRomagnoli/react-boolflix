import { useMediaContext } from "../contexts/GlobalContext";
import MediaList from "./MediaList";

export default function Main() {
  const { resultMovies, resultShows } = useMediaContext();

  return (
    <>
      <main>
        <div>
          <MediaList mediaList={resultMovies}>
            <h2>Movies</h2>
          </MediaList>
        </div>
        <div>
          <MediaList mediaList={resultShows}>
            <h2>Movies</h2>
          </MediaList>
        </div>
      </main>
    </>
  );
}

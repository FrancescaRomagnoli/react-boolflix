import { useMediaContext } from "../contexts/GlobalContext";
import MediaList from "./MediaList";

export default function Main() {
  const { resultMovies, resultShows } = useMediaContext();

  return (
    <>
      <main>
        <div>
          <MediaList mediaList={resultMovies} />
          <MediaList mediaList={resultShows} />
        </div>
      </main>
    </>
  );
}

import { useMovieAndShowsContext } from "../contexts/MovieAndShowsContext";
import MediaCard from "./MediaCard";

export default function ShowsList() {
  const { resultShows } = useMovieAndShowsContext();

  return (
    <>
      {resultShows.length > 0 ? (
        resultShows.map((show) => {
          return (
            <div key={show.id}>
              <MediaCard media={show} />
            </div>
          );
        })
      ) : (
        <>
          <div>Search something</div>
        </>
      )}
    </>
  );
}

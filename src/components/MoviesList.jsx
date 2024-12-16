import { useMovieAndShowsContext } from "../contexts/MovieAndShowsContext";
import MediaCard from "./MediaCard";

export default function MoviesList() {
  const { resultMovies } = useMovieAndShowsContext();

  return (
    <>
      {resultMovies.length > 0 ? (
        resultMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <MediaCard media={movie} />
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

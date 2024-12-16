import { useMovieContext } from "../contexts/MovieContext";

export default function MoviesList() {
  const { resultMovies, setResultMovies } = useMovieContext();

  return (
    <>
      {resultMovies.length > 0 ? (
        resultMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <ul>
                <li>{movie.title}</li>
                <li>{movie.original_title}</li>
                <li>{movie.original_language}</li>
                <li>{movie.vote_average}</li>
              </ul>
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

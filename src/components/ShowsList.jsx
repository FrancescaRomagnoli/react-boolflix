import { useMovieAndShowsContext } from "../contexts/MovieAndShowsContext";

export default function ShowsList() {
  const { resultShows } = useMovieAndShowsContext();

  return (
    <>
      {resultShows.length > 0 ? (
        resultShows.map((show) => {
          return (
            <div key={show.id}>
              <ul>
                <li>{show.name}</li>
                <li>{show.original_name}</li>
                <li>{show.original_language}</li>
                <li>{show.vote_average}</li>
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

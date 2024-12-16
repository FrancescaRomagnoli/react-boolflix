import { useMovieAndShowsContext } from "../contexts/MovieAndShowsContext";

export default function SearchBar() {
  const { searchTerm, handleSearch, handleSearchButton } =
    useMovieAndShowsContext();

  return (
    <form onSubmit={handleSearchButton}>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="search..."
      />
      <button>search</button>
    </form>
  );
}

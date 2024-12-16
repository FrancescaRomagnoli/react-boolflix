import { useMovieContext } from "../contexts/MovieContext";

export default function SearchBar() {
  const { searchTerm, handleSearch, handleSearchButton } = useMovieContext();

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

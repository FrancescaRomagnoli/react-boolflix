import { useMediaContext } from "../contexts/GlobalContext";

export default function SearchBar() {
  const { searchTerm, handleSearch, handleSearchButton } = useMediaContext();

  return (
    <form onSubmit={handleSearchButton}>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="search..."
        className="input-field"
      />
      <button className="btn btn-red">search</button>
    </form>
  );
}

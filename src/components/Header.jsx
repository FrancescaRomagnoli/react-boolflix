import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-container">
          <div>
            <div>boolflix</div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
}

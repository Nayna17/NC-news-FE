import { useState } from "react"
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <form>
      <input
        className="search-bar"
        type="search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      ></input>
      <button className="search-button">Search</button>
    </form>
  );
};
export default SearchBar;
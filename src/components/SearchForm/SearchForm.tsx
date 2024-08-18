import React from "react";
import "./SearchForm.scss";
import MagnifyGlass from "../Icons/MagnifyGlass";

function SearchForm() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <form className="header__search-form">
      <MagnifyGlass />
      <input type="text" className="header__search-input" placeholder="Search for a preffered job..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </form>
  );
}

export default SearchForm;

import React from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setSearchValue("");
    }
  }
  function handelChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <div>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        onChange={handelChange}
        onKeyUp={submit}
        value={searchValue}
        placeholder="Search a TV Show you may like..."
        className={s.input}
      />
    </div>
  );
}

export default SearchBar;

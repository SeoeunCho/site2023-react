import React, { useRef } from "react";

const Search = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="search">
      <div className="search-box">
        <input ref={inputRef} onKeyPress={onKeyPress} type="search" placeholder="검색어를 입력해주세요." />
        <button type="submit" onClick={onClick}></button>
      </div>
    </div>
  );
};

export default Search;

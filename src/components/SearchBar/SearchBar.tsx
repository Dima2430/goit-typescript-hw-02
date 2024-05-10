import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim() === "") {
      toast("Please,enter text to search for images");
    } else {
      onSubmit(query);
      setQuery("");
    }
  }

  return (
    <header
      style={{
        position: "absolute",
        top: "10px",
        left: "200px",
      }}
    >
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  console.log(window.history);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setQuery(query);
    setQuery("");
  }

  return (
    <section className="search-form">
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label>
          Search:
          <input value={query} onChange={e => handleChange(e)} />
        </label>
      </form>
      <Link to="/character-list">Character</Link>
    </section>
  );
}

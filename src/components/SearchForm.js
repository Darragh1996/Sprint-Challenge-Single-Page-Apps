import React, { useState } from "react";
import { tsPropertySignature } from "@babel/types";
import { Link } from "react-router-dom";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    props.setQuery(query);
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
          <input onChange={e => handleChange(e)} />
        </label>
      </form>
      <Link to="/character-list">Character</Link>
    </section>
  );
}

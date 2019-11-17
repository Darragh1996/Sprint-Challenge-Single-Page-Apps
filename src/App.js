import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <main>
      <Header />
      <Route exact path="/" render={WelcomePage} />
      <Route
        path="/character-list"
        render={() => {
          return <CharacterList query={query} />;
        }}
      />
      <Route
        path="/search-form"
        render={() => {
          return <SearchForm setQuery={setQuery} />;
        }}
      />
    </main>
  );
}

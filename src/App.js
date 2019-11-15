import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      {/* <CharacterList /> */}
    </main>
  );
}

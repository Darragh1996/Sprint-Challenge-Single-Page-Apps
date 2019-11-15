import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res);
        setChars(...chars, res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>List of Characters</h2>
      {chars
        ? chars.map(char => {
            return (
              <CharacterCard
                name={char.name}
                image={char.image}
                origin={char.origin.name}
                status={char.status}
              />
            );
          })
        : "no characters"}
    </section>
  );
}

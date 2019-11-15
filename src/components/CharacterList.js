import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const SubHeader = styled.h1`
  color: blue;
  text-align: center;
`;

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  let apiString = `https://rickandmortyapi.com/api/character/`;

  if (props.query) {
    apiString = `https://rickandmortyapi.com/api/character/?name=${props.query}`;
  }

  useEffect(() => {
    axios
      .get(apiString)
      .then(res => {
        setChars(...chars, res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <SubHeader>List of Characters</SubHeader>
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

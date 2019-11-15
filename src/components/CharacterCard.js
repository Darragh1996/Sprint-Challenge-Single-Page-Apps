import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: red;
  display: flex;
  margin: 10px auto;
  width: 800px;
  border-radius: 10px;

  div {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <img src={props.image} />
      <div>
        <h2>Name: {props.name}</h2>
        <h3>Origin: {props.origin}</h3>
        <h3>Status: {props.status}</h3>
      </div>
    </Card>
  );
}

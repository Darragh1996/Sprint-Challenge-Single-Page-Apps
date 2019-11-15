import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} />
      <div>
        <h2>Name: {props.name}</h2>
        <h3>Origin: {props.origin}</h3>
        <h3>Status: {props.status}</h3>
      </div>
    </div>
  );
}

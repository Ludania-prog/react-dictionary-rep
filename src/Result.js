import React from "react";

import Phonetic from "./Phonetic";

import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.results);

  if (!props.results.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>

      <Phonetic phonetic={props.results.phonetic} />

      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}

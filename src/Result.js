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
      <section>
        <h2>{props.results.word}</h2>

        <Phonetic phonetic={props.results.phonetic} />
      </section>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        );
      })}
    </div>
  );
}

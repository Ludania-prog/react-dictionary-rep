import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>{props.meaning.definition}</p>

      {props.meaning.example && (
        <p>
          <em>{props.meaning.example}</em>
        </p>
      )}

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {props.meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}

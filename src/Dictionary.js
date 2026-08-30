import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  let [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data);

    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `990t50744fc2a02348640f8o4b9c6621`;

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    console.log(apiUrl);

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>{" "}
      <Result results={results} />
    </div>
  );
}

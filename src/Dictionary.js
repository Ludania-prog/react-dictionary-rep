import React, { useState } from "react";

import "./Dictionary.css";

import axios from "axios";

import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `990t50744fc2a02348640f8o4b9c6621`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    console.log(apiUrl);

    let pexelsApiKey =
      "GoXN6i0L0Qc7bOPItSBvfD2DsRAzlPVVxG08CuAZrrJLMDep8mOMKkRQ";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setPhotos(response.data.photos);
      })
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
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
      </form>

      <div className="Photos">
        {photos.map(function (photo) {
          return <img key={photo.id} src={photo.src.medium} alt={photo.alt} />;
        })}
      </div>
      <Result results={results} />
    </div>
  );
}

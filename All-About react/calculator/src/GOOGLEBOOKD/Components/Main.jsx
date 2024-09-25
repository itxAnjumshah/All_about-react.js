import React, { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import axios from "axios";

export default function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA3bVTRavTZM5rxK2FWavsCtTfLTmzHvoc&maxResults=40`
        )
        .then((resp) => setBookData(resp.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without soul
          </h1>
        </div>

        <div className="row2">
          <h2>Find your books</h2>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              placeholder="Enter your book Name"
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovBe2IO86LZMs8zGhFudPvM8soPfWaV_8ow&s"
            }
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

export default function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks &&
    item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt={item.volumeInfo.title} />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors && item.volumeInfo.authors.join(", ")}</h3>
            <h4>
              {item.volumeInfo.publisher}{" "}
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              <button>Read more</button>
            </a>
          </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
}

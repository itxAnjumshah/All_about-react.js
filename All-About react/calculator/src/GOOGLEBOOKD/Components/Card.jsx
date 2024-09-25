import React, { useState } from "react";
import "./Main.css";
import Modal from "./Modal";

export default function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState(null);

  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail) {
          return (
            <div
              className="card"
              key={index}
              onClick={() => {
                setShow(true);
                setBookItem(item);
              }}
            >
              <img src={thumbnail} alt={item.volumeInfo.title} />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                {amount !== undefined ? (
                  <p className="amount">&#8377;{amount}</p>
                ) : (
                  <p className="amount">Price not available</p>
                )}
              </div>
            </div>
          );
        }
        return null;
      })}
      {show && (
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
}

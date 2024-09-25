import React, { useState } from "react";
import NewsComponents from "./newscomponets";

export default function News() {
  const [page, setPage] = useState(1);

  function handlePrevClick() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextClick() {
    setPage(page + 1);
  } 

  return (
    <div className="Container my-4">
      <h2 className="text-center">News Monkey - Top Headlines</h2>

      <div className="row">
        <div className="col-md-12">
          <NewsComponents currentPage={page} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mx-2"
          onClick={handlePrevClick}
          disabled={page === 1}
        >
          Previous
        </button>
        <button className="btn btn-primary mx-2" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

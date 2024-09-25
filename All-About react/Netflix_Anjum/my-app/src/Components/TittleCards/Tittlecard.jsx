// import React, { useEffect, useRef, useState } from "react";
// import "./Tittlecardstyle.css";
// import Cards_data from "../../assets/cards/Cards_data";
// import { Link } from "react-router-dom";

// const Tittlecard = ({ title, category }) => {
//   const [apiData, setapiData] = useState([]);

//   const cardRef = useRef();
//   //
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQzMDVlYWIwYTQwNjQ3ZGQzNzVjZjU3NzdjZDI3OCIsIm5iZiI6MTcyNDY1MDExMS41MTQ0OTEsInN1YiI6IjY2YzQ4ZmU4ZGQyY2MyYzI5YTNiMWZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTYM0rNdx-Jrt_f7uK2y6-re5bn9RfgRu0WS-XDYqhY",
//     },
//   };

//   //
//   const handleWheel = (event) => {
//     event.preventDefault(); // Corrected this line
//     cardRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     //
//     fetch(
//       `https://api.themoviedb.org/3/movie/${
//         category ? category : "now_playing"
//       }?language=en-US&page=1`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setapiData(response.results))
//       .catch((err) => console.error(err));

//     //

//     cardRef.current.addEventListener("wheel", handleWheel);
//     return () => {
//       cardRef.current.removeEventListener("wheel", handleWheel);
//     };
//   }, []);

//   return (
//     <div className="tittle-cards">
//       <h2>{title ? title : "Popular on Netflix "} </h2>
//       <div className="cart-list" ref={cardRef}>
//         {apiData.map((card, index) => {
//           return (
//             <Link to={`/player/${card.id}`} className="card" key={index}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
//                 alt=""
//               />
//               <p>{card.original_title}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Tittlecard;
import React, { useEffect, useRef, useState } from "react";
import "./Tittlecardstyle.css";
import { Link } from "react-router-dom";

const Tittlecard = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQzMDVlYWIwYTQwNjQ3ZGQzNzVjZjU3NzdjZDI3OCIsIm5iZiI6MTcyNDY1MDExMS41MTQ0OTEsInN1YiI6IjY2YzQ4ZmU4ZGQyY2MyYzI5YTNiMWZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTYM0rNdx-Jrt_f7uK2y6-re5bn9RfgRu0WS-XDYqhY",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault(); 
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setapiData(response.results))
      .catch((err) => console.error(err));

    if (cardRef.current) {
      cardRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="tittle-cards">
      <h2>{title ? title : "Popular on Netflix "} </h2>
      <div className="cart-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tittlecard;

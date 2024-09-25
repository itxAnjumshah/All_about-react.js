import React, { useEffect, useState } from "react";
import "./Playerstyle.css";
import Back_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const {id}=useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQzMDVlYWIwYTQwNjQ3ZGQzNzVjZjU3NzdjZDI3OCIsIm5iZiI6MTcyNDY1MDExMS41MTQ0OTEsInN1YiI6IjY2YzQ4ZmU4ZGQyY2MyYzI5YTNiMWZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTYM0rNdx-Jrt_f7uK2y6-re5bn9RfgRu0WS-XDYqhY",
    },
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setapiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  //

  return (
    <div className="player">
      <img src={Back_icon} alt="" onClick={()=>{
        navigate(-2)
      }} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;


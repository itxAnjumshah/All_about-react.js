import React, { useEffect, useState } from 'react';

export default function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-28&sortBy=publishedAt&apiKey=b1dab607979f40baaec7ed8960d200b0")
      .then(response => response.json())
      .then(data => setData(data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {
        data.map((item, index) => (
          <div key={index}>

            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
            <h2>{item.author}</h2>
            <p>{item.title}</p>
            <span>{item.description}</span>
            <span>{item.publishedAt}</span>
            {/* <a href={item.url}></a>
             */}
             <img src={item.url} alt="" />
            <h3>{item.content}</h3>
          </div>
        ))
      }
    </div>
  );
}

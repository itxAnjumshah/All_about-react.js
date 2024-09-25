import React, { useEffect, useState } from 'react';
import './Fetch.css'


export default function Fetch() {
  const [data, setData] = useState(null); // Changed to an object since the API returns a single product

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
    
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      })
    
  }, []); 

  return (
    <div>
      <h1>This is API data fetch / get</h1>
      {data ? (
        <table >
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Thumbnail</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.rating}</td>
              <td>{data.stock}</td>
              <td>{data.brand}</td>
              <td>{data.category}</td>
              <td><img src={data.thumbnail} alt={data.title} width="50" /></td>
              <td>
                {data.images && data.images.map((img, index) => (
                  <img key={index} src={img} alt={`${data.title}-${index}`} width="50" />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

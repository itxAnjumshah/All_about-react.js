import React, { useEffect, useState } from "react";

export default function Delete() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    fetch("https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum")
      .then((result) => result.json())
      .then((response) => {
        setData(response);
      });
  }

  function Deleteuser(id) {
    alert("helo" + id);
    fetch(`https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
       console.log(response)
       getdata()
      });
    });
  }

  return (
    <div>
      <h1>Delete API</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Number</th>
            <th>button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.number}</td>
              <td>
                <button onClick={() => Deleteuser(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

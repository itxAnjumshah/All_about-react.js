import React, { useEffect, useState } from "react";

export default function Update() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [userid,setuserid]=useState(null)

  useEffect(() => {
    getdata();
  }, []);

function controller(e) {
    e.preventDefault();
    
}

  function getdata() {
    fetch("https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum")
      .then((result) => result.json())
      .then((response) => {
        setData(response);
        setName(response[0].name);
        setCode(response[0].code);
        setNumber(response[0].number);
        setuserid(response[0].id)
      });
  }

  


  function Selectuser(id) {
    let item=data[id - 1]
    setName(item.name);
    setCode(item.code);
    setNumber(item.number);
    setuserid(item.id)
  }
  
function updateuser() {
let item={name,code,number,userid}

  fetch(`https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum/${userid}`, {
    method: "PUT",
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(item)

  }).then((result) => {
    result.json().then((response) => {
     console.log(response)
     getdata()
    });
  });
}

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <h1>update-prefille api</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Number</th>
            <th>Button</th>
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
                <button onClick={() => Selectuser(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <br />
      <form onSubmit={controller}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        <br />
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <br />
        
        <button onClick={updateuser}>update</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";

export default function Postmethod() {
  // Prevent the form from submitting by default
  function Formchnage(e) {
    e.preventDefault();
  }

  // State for storing user inputs
  const [name, setname] = useState("");
  const [code, setcode] = useState("");
  const [number, setnumber] = useState("");
  // const [image,setimage]=useState("")

  // Function to save user data via POST method
  function Saveuser() {
    let data = { name, code, number };//image andr the
    
    // Using fetch to post data to API
    fetch("https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum", {
      method: 'POST',
      headers: { // Fixed 'Headers' to 'headers'
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data) // Convert the data to JSON string
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp); // Log the response
      });
    });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>post method api</h1>
      <form onSubmit={Formchnage}>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)} // Update name state
        />
        <br /> <br />
        <input
          type="number"
          value={code}
          onChange={(e) => setcode(e.target.value)} // Update code state
        />
        <br /> <br />
        <input
          type="number"
          value={number} // Removed error in type="number"
          onChange={(e) => setnumber(e.target.value)} // Update number state
        />
        <br /> <br />
        <input type="image" src="" alt="" />
        <button type="submit" onClick={Saveuser}>Submit</button> {/* Calls Saveuser on click */}
      </form>
    </div>
  );
}

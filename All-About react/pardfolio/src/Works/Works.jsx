import React, { useEffect, useState } from "react";
import "./Work.css";

export default function Works() {
  const [data, setData] = useState([]);
  const [upload, setUpload] = useState(null);
  const [carname, setCarname] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    userdata();
  }, []);

  function userdata() {
    fetch("https://667e3a85297972455f678bca.mockapi.io/car-api")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        if (result.length > 0) {
          // Set initial values for the first item in the list
          setUpload(result[0].image);
          setCarname(result[0].name);
          setDescription(result[0].description);
        }
      });
  }

  function userdeletedata(id) {
    fetch(`https://667e3a85297972455f678bca.mockapi.io/car-api/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        userdata();
        alert("ITEM DELETED SUCCESSFULLY");
      });
  }

  function edituser(id) {
    let item = data.find((item) => item.id === id);
    setUpload(item.image); // Set image from the selected item
    setCarname(item.name); // Set car name from the selected item
    setDescription(item.description); // Set description from the selected item
    setEditId(id); // Set the edit ID
  }

  function uploaditem() {
    let item = { image: upload, name: carname, description };
    fetch(`https://667e3a85297972455f678bca.mockapi.io/car-api/${editId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        userdata(); // Refresh the data after update
      });
  }

  const handleFileChange = (e) => {
    setUpload(e.target.files[0]); // Update the upload state with the selected file
  };

  return (
    <div id="works">
      <h1>PROJECT / WORKS</h1>
      <div className="output">
        <div className="inner-output">
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h1>{item.car}</h1>
              <p>{item.description}</p>
              <footer className="btns-bottom">
                <button className="delete-btn" onClick={() => userdeletedata(item.id)}>
                  delete
                </button>
                <button className="edit-btn" onClick={() => edituser(item.id)}>
                  edit
                </button>
              </footer>
            </div>
          ))}
          <br />
          <div className="visible-container">
            <div className="inner-visible">
              <input type="file" onChange={handleFileChange} />
              <input
                value={carname}
                onChange={(e) => setCarname(e.target.value)}
                type="text"
                placeholder="enter car name"
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="enter your car problem"
              />
              <button className="update-btn" onClick={uploaditem}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function MapFunction() {
  const Student = [
    {
        id:"1",
      name: "Anjum",
      number: "+92312862279333333",
      email: "anjumshah402@gmail.com",
      address: "middle of the  earth",
    },
    {
        id:"2",
      name: "Syed",
      number: "1234567890-",
      email: "qdfgbnm",
      address: "qdfvb dfghjk",
    },


    {
        id:"3",
      name: "Anjum",
      number: "+92312862279333333",
      email: "anjumshah402@gmail.com",
      address: "middle of the  earth",
    },
    {
        id:"4",
      name: "Syed",
      number: "1234567890-",
      email: "qdfgbnm",
      address: "qdfvb dfghjk",
    },

  ];

  return (
    <div>
      <h1>this is for map function </h1>

      <table>
      <tbody>
         <tr>
            <th>id</th>
          <th>Name</th>
          <th>phone</th>
          <th>eamil</th>
          <th>address</th>
          </tr>
                 
        
          {Student.map((data,i ) => (
            <tr key={i}>
                <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

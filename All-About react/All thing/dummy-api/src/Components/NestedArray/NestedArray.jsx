import React from "react";

export default function NestedArray() {
  const nested = [
    {
      name: "Anjum",
      Numbrer: "2323423423",
      email: "anfdkjfdljf@",
      address: [
        {
          city: "Lahore",
          house: "10num",
          ofice: "markez1",
        },
        {
          city: "Islamabad",
          house: "10num",
          ofice: "markez1",
        },
        {
          city: "Rawalpindi",
          house: "10num",
          ofice: "markez1",
        },
      ],
    },
    {
      name: "Anjum Shah",
      Numbrer: "2323423423",
      email: "anfdkjfdljf@",
      address: [
        {
          city: "Lahore",
          house: "10nughgm",
          ofice: [
            {
              shop: "1",
            },
          ],
        },
        {
          city: "Islamabad",
          house: "10nufdfm",
          ofice: [
            {
              shop: "2",
            },
          ],
        },
        {
          city: "Rawalpindi",
          house: "10nughghm",
          ofice: "markez1",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>This is a nested array</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {nested.map((item, dataIdx) => (
            <tr key={dataIdx}>
              <td>{item.name}</td>
              <td>{item.Numbrer}</td>
              <td>{item.email}</td>
              <td>
                <table border="1">
                  <thead>
                    <tr>
                      <th>City</th>
                      <th>House</th>
                      <th>Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((adr, adrIdx) => (
                      <tr key={adrIdx}>
                        <td>{adr.city}</td>
                        <td>{adr.house}</td>
                        <td>
                          {Array.isArray(adr.ofice)
                            ? adr.ofice.map((ofc, ofcIdx) => (
                                <div key={ofcIdx}>Shop: {ofc.shop}</div>
                              ))
                            : adr.ofice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

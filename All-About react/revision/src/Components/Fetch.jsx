import React, { useEffect, useState } from 'react';

export default function Fetchapi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://66d95a5c4ad2f6b8ed544c50.mockapi.io/api/anjum")
            .then((result) => result.json())
            .then((response) => {
                setData(response);
            });
    }, []);

    return (
        <div>
            <h1>Fetch API</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* <th>Image</th> */}
                        <th>Code</th>
                        <th>Number</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            {/* <td>
                                <img src={item.avatar} alt="avatar" width="230" height="230" />
                            </td> */}
                            <td>{item.code}</td>
                            <td>{item.number}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

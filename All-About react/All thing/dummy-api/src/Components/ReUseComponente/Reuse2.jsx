import React from 'react';

export default function Reuse2({ data }) {
  return (
    <div style={{display:'flex',gap:'90px'}}>
      <p>{data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
}

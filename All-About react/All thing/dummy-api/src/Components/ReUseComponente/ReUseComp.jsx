import React from 'react';
import Reuse2 from './Reuse2';

export default function ReUseComp() {
  const reuse = [
    { name: "anjum", email: "anju1223m", phone: "invalid-number" },
    { name: "anjum2", email: "anju125662443m", phone: "invalid-334number" },
    { name: "anjum3", email: "anju1224343243m", phone: "invalid-434number" },
    { name: "anjum4", email: "anju1233323m", phone: "invalid-4344number" },
  ];

  return (
    <div>
      <h1>This is the ReUse component  is  ko  again samjana  ha</h1>
      {
        reuse.map((item, index) =>
          <Reuse2 key={index} data={item} />
        )
      }
    </div>
  );
}

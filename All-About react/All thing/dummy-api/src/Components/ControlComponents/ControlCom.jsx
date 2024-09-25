import React, { useState } from "react";

export default function ControlCom() {
    
  const [val, setval] = useState("");
  const [item, setitem] = useState("");

  return (
    <div>
      <h1>this is control component</h1>
      <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
      <input
        type="text"
        value={item}
        onChange={(p) => setitem(p.target.value)}
      />
      <h3> value:{val}</h3>
      <h3>item:{item}</h3>
    </div>
  );
}

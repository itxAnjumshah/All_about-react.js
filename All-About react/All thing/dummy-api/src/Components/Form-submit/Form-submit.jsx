import React, { useState } from "react";

export default function Formsubmit() {
  const [name, setname] = useState("");
  const [tnc, settnc] = useState(false);
  const [interest, setinterest] = useState("");

  function Getformdata(e) {
    console.log(name,  interest,tnc);
    e.preventDefault();
  }

  return (
    <div>
      <h1>this is form submit event</h1>
      <form onSubmit={Getformdata}>
        <input
          type="text "
          value={name}
          placeholder="enter  your name"
          onChange={(e) => setname(e.target.value)}
        />{" "}
        <br /> <br />
        <select onChange={(e) =>setinterest(e.target.value)}>
          <option > iphone</option>
          <option > samsung</option>
          <option>vivo</option>
          <option > infinix</option>
          <option >real me</option>
          <option > nokia</option>
        </select>
        <br /> <br />
        <input type="radio" onChange={(e) => settnc(e.target.checked)} />
        <span>accept terms and conditions</span>
        <br /> <br />
        <button type="submit"> submit</button>
       
      </form>
      <button> clear</button>
    </div>
  );
}

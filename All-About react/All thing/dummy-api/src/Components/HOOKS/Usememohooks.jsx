import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export default function Usememohooks() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(0);

  const multicountmemo = useMemo(
    function multicount() {
      console.warn("multicount");
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h1>this hook is usememo</h1>
      <h2> this is count value: {count}</h2>
      <h2> this is item value :{item}</h2>
      <h2>
        {" "}
        this value is multiply by 5 to the value of count : {multicountmemo}
      </h2>
      <button onClick={() => setcount(count + 1)}>add count</button>
      <button onClick={() => setitem(item + 1)}> add item</button>
    </div>
  );
}

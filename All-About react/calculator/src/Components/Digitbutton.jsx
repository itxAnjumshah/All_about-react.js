import React from "react";

export default function Digitbutton({ digit, onClick }) {
  return <button onClick={onClick}>{digit}</button>;
}

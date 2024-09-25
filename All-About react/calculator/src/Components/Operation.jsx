import React from "react";

export default function Operationbutton({ operation, onClick }) {
  return <button onClick={onClick}>{operation}</button>;
}

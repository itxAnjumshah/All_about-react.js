import React, { useState } from "react";
import "./CalStyle.css";
import Digitbutton from "./Digitbutton";
import Operationbutton from "./Operation";

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);

  const handleDigit = (digit) => {
    if (digit === "0" && currentOperand === "0") return;
    if (digit === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + digit);
  };

  const handleOperation = (operation) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      const value = evaluate();
      setPreviousOperand(value);
      setCurrentOperand("");
    } else {
      setPreviousOperand(currentOperand);
      setCurrentOperand("");
    }
    setOperation(operation);
  };

  const evaluate = () => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";
    let result = "";
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return "";
    }
    return result.toString();
  };

  const handleEvaluate = () => {
    if (operation == null || currentOperand == null || previousOperand == null) {
      return;
    }
    const value = evaluate();
    setCurrentOperand(value);
    setPreviousOperand("");
    setOperation(null);
  };

  const handleClear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  return (
    <>
      <div className="inner">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {previousOperand} {operation}
            </div>
            <div className="current-operand">{currentOperand}</div>
          </div>
          <button className="span-two" onClick={handleClear}>
            AC
          </button>
          <button onClick={handleDelete}>Del</button>
          <Operationbutton operation="/" onClick={() => handleOperation("/")} />
          <Digitbutton digit="1" onClick={() => handleDigit("1")} />
          <Digitbutton digit="2" onClick={() => handleDigit("2")} />
          <Digitbutton digit="3" onClick={() => handleDigit("3")} />
          <Operationbutton operation="*" onClick={() => handleOperation("*")} />
          <Digitbutton digit="4" onClick={() => handleDigit("4")} />
          <Digitbutton digit="5" onClick={() => handleDigit("5")} />
          <Digitbutton digit="6" onClick={() => handleDigit("6")} />
          <Operationbutton operation="+" onClick={() => handleOperation("+")} />
          <Digitbutton digit="7" onClick={() => handleDigit("7")} />
          <Digitbutton digit="8" onClick={() => handleDigit("8")} />
          <Digitbutton digit="9" onClick={() => handleDigit("9")} />
          <Operationbutton operation="-" onClick={() => handleOperation("-")} />
          <Digitbutton digit="." onClick={() => handleDigit(".")} />
          <Digitbutton digit="0" onClick={() => handleDigit("0")} />
          <button className="span-two" onClick={handleEvaluate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

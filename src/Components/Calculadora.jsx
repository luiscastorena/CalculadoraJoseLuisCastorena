import React, { useState } from "react";
import Button from "./Button";
import "../styles/styles.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setCurrentValue(eval(currentValue).toString());
      } catch {
        setCurrentValue("Error");
      }
    } else if (value === "C") {
      setCurrentValue("");
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  return (
    <div>
      <input type="text" value={currentValue} readOnly />
      <div className="grid-contenedor">
        {/* {["C", "+","-", "*", 7, 8, 9, 8, 6, 5, "4", "-", "1", "2", "3", "="].map( */}
        {[
          "C",
          "+",
          "-",
          "*",
          7,
          8,
          9,
          "/",
          6,
          5,
          "4",
          "-",
          "1",
          "2",
          "3",
          "=",
        ].map((item) => (
          <Button key={item} value={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

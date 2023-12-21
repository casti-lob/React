import React from "react";
import "./App.css";
const ProgressBar = ({ width: inputWidth }) => {
  return (
    <div>
      <div className="container">
          <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
            {inputWidth}
          </div>
      </div>
    </div> 
  );
};
export default ProgressBar;
import React, { useState } from "react";

const Display = () => {
const [setDisplay, setDisplayState] = useState(0);
  return (
    <div className="display">
      {setDisplay}
      </div>
    );
  }

export default Display;
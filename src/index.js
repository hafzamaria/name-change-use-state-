import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./style.css";

const Name = () => {
  const [isName, setName] = useState("Maria");

  return (
    <>
      <h2>Change the Name into fullName by clicking the button!</h2>
      <div className="main">
        <h1>{isName ? "Maria" : "MariaImran"}</h1>
        <button className="but" onClick={() => setName(!isName)}>
          Change
        </button>
      </div>
    </>

    //   <div>
    //     <h1>{isName}</h1>
    //     <button onClick={()=>setName('MariaImran')}>fullName</button>
    //   </div>
  );
};

ReactDOM.render(<Name />, document.querySelector("#root"));

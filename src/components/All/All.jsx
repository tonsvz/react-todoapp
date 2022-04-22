import React from "react";
import "./All.scss";

const All = () => {
  return (
    <div className="all-component-container">
      <div className="header">
        <div className="title">
          <h1>#todo</h1>
        </div>
      </div>

      <div className="btn-container">
        <ul>
          <li>
            {" "}
            <a href="#">All</a>
          </li>
          <li>
            {" "}
            <a href="#">Active</a>
          </li>
          <li>
            {" "}
            <a href="#">Completed</a>
          </li>
        </ul>
      </div>

      <div className="input-container">
        <input type="text" placeholder="add details" />
        <button>add</button>
      </div>

      <div className="checks-container">
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
};

export default All;

import React from "react";
import { addBreak } from "../../utilities/utilities";
import "./Break.css";

const Break = () => {
  return (
    <div>
      <h5 className="fw-bold my-4 mx-2">Add a Break</h5>
      <div className="d-flex justify-content-between align-items-center bg-light rounded-2 px-3">
        <div onClick={addBreak} className="p-2">
          <p className="bg-white rounded-circle p-2 mb-0">
            <span className="pointer" id="ten">
              10
            </span>
            s
          </p>
        </div>
        <div onClick={addBreak} className="p-2">
          <p className="bg-white rounded-circle p-2 mb-0">
            <span className="pointer" id="twenty">
              20
            </span>
            s
          </p>
        </div>
        <div onClick={addBreak} className="p-2">
          <p className="bg-white rounded-circle p-2 mb-0">
            <span className="pointer" id="thirty">
              30
            </span>
            s
          </p>
        </div>
        <div onClick={addBreak} className="p-2">
          <p className="bg-white rounded-circle p-2 mb-0">
            <span className="pointer" id="forty">
              40
            </span>
            s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Break;

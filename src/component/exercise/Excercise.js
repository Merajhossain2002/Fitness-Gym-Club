import React from "react";

const Excercise = () => {
  return (
    <div>
      <h5 className="fw-bold my-4">Exercise Details</h5>
      <div className="bg-light p-3 mb-3 rounded-3">
        <h6 className="mb-0 fw-bold">
          Exercise Time:{" "}
          <span id="exercise-time" className="text-muted">
            0
          </span>
          s
        </h6>
      </div>
      <div className="bg-light p-3 rounded-3 mb-5">
        <h6 className="mb-0 fw-bold">
          Break Time:{" "}
          <span id="break-time" className="text-muted">
            10
          </span>
          s
        </h6>
      </div>
      <button className="btn btn-primary w-100">Activity Complete</button>
    </div>
  );
};

export default Excercise;

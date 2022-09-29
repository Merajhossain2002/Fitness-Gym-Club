import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Excercise = () => {
  const breakTime = localStorage.getItem("exercise-break");
  const showToast = () => {
    toast.success("Congratulation, Activity is Completed.", {
      position: "top-center",
    });
  };
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
            {breakTime}
          </span>
          s
        </h6>
      </div>
      <button onClick={showToast} className="btn btn-primary w-100">
        Activity Complete
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Excercise;

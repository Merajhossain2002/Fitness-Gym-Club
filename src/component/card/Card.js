import "./Card.css";

import React from "react";

const Card = () => {
  return (
    <div className=" m-1 p-3 bg-white rounded-4 shadow">
      <img
        className="img-size  d-inline rounded-4 mb-3"
        src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="gym-img"
      ></img>
      <h4 className="my-2 fw-bold">Dumbbell</h4>
      <p className="text-muted">
        exercise gives you energy, power, healthy life so do exercise eat
        healthy live healthy.
      </p>
      <h6 className="text-muted mb-2">
        For Age: <span className="text-dark">20-28</span>
      </h6>
      <h6 className="text-muted">
        Time Required: <span className="text-dark">30s</span>
      </h6>
      <button className="btn btn-primary w-100 mt-3">Add to list</button>
    </div>
  );
};

export default Card;
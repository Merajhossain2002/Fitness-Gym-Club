import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="row p-2 mb-2">
        <div className="col-4">
          <img
            className="profile-img rounded-circle p-1"
            src="https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80"
            alt=""
          ></img>
        </div>
        <div className="col-8 align-self-center p-0">
          <h5 className="mb-0 fw-bold">Meraj Faizan</h5>
          <i className="fa-solid fa-location-dot text-muted"></i>
          <p className="d-inline text-muted "> Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center bg-light rounded-2">
        <div className="p-2 rounded-3">
          <h5 className="mb-0">
            42<small className="fs-6">kg</small>
          </h5>
          <h6 className="text-muted">Weight</h6>
        </div>
        <div className="p-2 rounded-3">
          <h5 className="mb-0">
            5.3<small className="fs-6">f</small>
          </h5>
          <h6 className="text-muted">Height</h6>
        </div>
        <div className="p-2 rounded-3">
          <h5 className="mb-0">
            20<small className="fs-6">y</small>
          </h5>
          <h6 className="text-muted">age</h6>
        </div>
      </div>
    </div>
  );
};

export default Profile;

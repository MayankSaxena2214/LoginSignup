import React from "react";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondsary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form>
          <div className="mb-3">
            <label htmlfor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              name="email"
              autoComplete="off"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label htmlfor="email">
              <strong>EMail</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlfor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              name="password"
              autoComplete="off"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          <p>Already have accunt</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

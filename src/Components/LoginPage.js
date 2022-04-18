import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "ez@ez.com";
  const userPhone = localStorage.getItem("phone")
    ? localStorage.getItem("phone")
    : "12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userName && phone === userPhone) {
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR Phone Number");
    }
  };
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">Profile Information</h4>
          <hr />
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <h6>Default Email:ez@ez.com</h6>
          <h6>Default Phone Number:12345</h6>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

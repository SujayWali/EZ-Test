import React from "react";
import Navbar from "./Navbar";

const UersList = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  return (
    <div>
      <Navbar />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">Profile Information</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
                <img
                  src={
                    localStorage.getItem("img")
                      ? localStorage.getItem("img")
                      : profilePIcDefault
                  }
                  alt="profile_pic"
                  className="img-thumbnail"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  First Name :{" "}
                  {localStorage.getItem("firstname")
                    ? localStorage.getItem("firstname")
                    : "NA"}
                </h4>
                <h4>
                  Last Name :{" "}
                  {localStorage.getItem("lastname")
                    ? localStorage.getItem("lastname")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Organisation :{" "}
                  {localStorage.getItem("organisation")
                    ? localStorage.getItem("organisation")
                    : "NA"}
                </h4>
                <h4>
                  Phone Number :{" "}
                  {localStorage.getItem("phone")
                    ? localStorage.getItem("phone")
                    : "NA"}
                </h4>
                <h4>
                  WhatsApp Number :{" "}
                  {localStorage.getItem("whatsapp")
                    ? localStorage.getItem("whatsapp")
                    : "NA"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UersList;

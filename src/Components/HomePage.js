import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

const HomePage = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const [firstname, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setemail] = useState("");
  const [img, setimg] = useState(profilePIcDefault);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === "") {
      toast.error("First Name Is Required");
    } else if (lastname === "") {
      toast.error("Last Name Is Required");
    } else if (email === "") {
      toast.error("Email Is Required");
    } else if (organisation === "") {
      toast.error("Email is Required");
    } else if (phone === "") {
      toast.error("Phone Number Is Required");
    } else if (whatsapp === "") {
      toast.error("WhatsApp Number Is Required");
    } else {
      localStorage.setItem("irstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("email", email);
      localStorage.setItem("organisation", organisation);
      localStorage.setItem("phone", phone);
      localStorage.setItem("whatsapp", whatsapp);
      // localStorage.setItem("img", img);
      toast.success("User Saved!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container content mt-4">
        <div className="row border p-4">
          <div className="col-md-4 ">
            <div className="profile_section">
              <p>Profile Information</p>
              <img
                src={profilePIcDefault}
                alt="profile_pic"
                name="file"
                className="img-thumbnail"
                height={250}
                width={250}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control-file"
                type="file"
                onChange={handleImg}
                name="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-3">
              <div class="col">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setname(e.target.value)}
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                  aria-label="Last name"
                />
              </div>
            </div>

            <div className="row g-3">
              <div class="col">
                <label className="form-label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <label className="form-label">Organisation</label>
                <input
                  type="text"
                  class="form-control"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  placeholder="Organisation"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className="row g-3">
              <div class="col ">
                <h6>Phone Number</h6>
                <select class="form-group col-md-4">
                  <option selected>Code</option>
                  <option value="1">01</option>
                  <option value="2">91</option>
                </select>

                <input
                  type="number"
                  class="form-group col-md-8"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="number"
                  maxlength="10"
                />
              </div>
              <div class="col">
                <h6>WhatsApp Number</h6>
                <select class="form-group col-md-4">
                  <option selected>Code</option>
                  <option value="1">01</option>
                  <option value="2">91</option>
                </select>
                <input
                  type="number"
                  class="form-group col-md-8"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  id="number"
                  maxlength="10"
                />
              </div>
            </div>

            <button
              type="submit"
              class="form__submit-btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

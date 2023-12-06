import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [profile, setProfile] = useState("");

  const navigate = useNavigate();

  const apiCall = (data) => {
    const url = `${process.env.REACT_APP_REQ_URL}/user/createUser`;
    console.log(url);
    axios
      .post(url, data)
      .then((re) => console.log(re))
      .catch((err) => console.log(err));
    // console.log(response);
  };

  const submit = (e) => {
    e.preventDefault();

    const data = {
      name,
      age,
      education,
      jobProfile:profile,
    };
    console.log(data);

    apiCall(data);

    navigate("/details");
  };

  return (
    <div className="container w-50 bg-body-secondary p-4 mt-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">
            Education
          </label>
          <input
            type="text"
            className="form-control"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jobProfile" className="form-label">
            Job Profile
          </label>
          <input
            type="text"
            className="form-control"
            id="jobProfile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

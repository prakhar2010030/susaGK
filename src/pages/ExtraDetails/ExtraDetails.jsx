import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExtraDetails = () => {
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [companies, setCompanies] = useState("");
  const [technologies, setTechnologies] = useState("");

  const navigate = useNavigate();

  const apiCall = async (data) => {
    const url = `${process.env.REACT_APP_REQ_URL}/user/extra-details`
    console.log(url)
    let response = await axios.post(url, data);
    console.log(response);
  };

  const submit = (e) => {
    e.preventDefault();

    const data = {
      experience,
      location,
      companies,
      technologies,
    };

    apiCall(data);

    navigate("/user");
  };
  return (
    <div className="container w-50 bg-body-secondary p-4 mt-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            id="experience"
            aria-describedby="emailHelp"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="companies" className="form-label">
            Companies
          </label>
          <input
            type="text"
            className="form-control"
            id="companies"
            value={companies}
            onChange={(e) => setCompanies(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="technologies" className="form-label">
            Technologies
          </label>
          <input
            type="text"
            className="form-control"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExtraDetails;

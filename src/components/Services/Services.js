import React from "react";
import Service from "../Service/Service";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import usePackages from "../../hooks/usePackages";

const Services = () => {
  const [services, setServices] = usePackages();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5" style={{ color: "#1ac167" }}>
        Package
      </h1>
      <div className="row row-cols-4 gy-4 justify-content-around">
        <div className="col shadow  service-item rounded mb-3 d-flex justify-content-center align-items-center">
          <Link to="/AddPackage">
            <h1 style={{ fontSize: "72px" }}>
              <i className="far fa-plus-square"></i>
            </h1>
          </Link>
        </div>
        {services.map((item) => (
          <Service key={item._id} service={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

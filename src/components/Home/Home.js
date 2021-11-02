import React from "react";
import usePackages from "../../hooks/usePackages";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = usePackages();
  //const services = MyDB.services.slice(0, 4);
  return (
    <>
      <div className="bg-container">
        <div className="">
          <h5 className="text-muted">Travel With Us</h5>
          <h1>
            <span style={{ color: "#1ac167" }}>Your Journey</span> Begins Now
          </h1>
        </div>
       
      </div>

      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Packages
        </h1>
        <div className="row row-cols-4 gy-4 justify-content-between">
          {services.slice(0, 8).map((item) => (
            <Service key={item._id} service={item}></Service>
          ))}
        </div>
      </div>
      <div className="container my-5">
        <h1 className="text-center mb-3" style={{ color: "#1ac167" }}>
          Our Photo Gallary
        </h1>
        <div className="row g-4">
          <img
            style={{ height: "200px" }}
            className="col-4"
            src="https://www.localguidesconnect.com/t5/image/serverpage/image-id/530423i5882993DD3C8323E?v=v2"
          />
          <img
            style={{ height: "200px" }}
            className="col-8"
            src="https://awalkintheworld.com/wp-content/uploads/2020/08/beach-saint-martins-island-bangladesh-1920x1080.jpg"
          />

          <img
            style={{ height: "200px" }}
            className="col-4"
            src="https://tour.nd.edu/assets/386270/1000x600/hdr_tour_home.jpg"
          />
          <img
            style={{ height: "200px" }}
            className="col-4"
            src="https://www.freetour.com/images/tours/22913/online-tour-barcelona-discover-barcelona-from-your-home-11.jpg"
          />
          <img
            style={{ height: "200px" }}
            className="col-4"
            src="https://static.toiimg.com/photo/67382132.cms"
          />
        </div>
      </div>
      <div className="container my-5 d-flex subscribe">
        <h1 className="w-50 text-white" style={{ fontSize: "48px" }}>
          Subscribe To Our Newsletter
        </h1>
        <div className="w-50">
          <input
            type="text"
            placeholder="Enter your email"
            className="subscribe-input"
          ></input>
          <span>
            <button>Subscribe</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;

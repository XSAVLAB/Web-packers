# Web-packers
Link to Website: https://welcomepackers.in/
Frontend










import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";

import img from "../../Assets/image1.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Mumbai",
    location: "New zeeland",
    grade: "CULTURAL RELAX",
    fees: "$2000",
    description: "utwiufghsdfchiuhiufhufhofoi",
  },
];
const Main = () => {
  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 className="title">Most visited destinatins</h3>
      </div>

      <div className="sectionContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="contient flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flax">
                    DETAILS
                    <HiClipboardCheck className="icon" />
                  </button>
                  
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

import React, {useEffect} from "react";
import "./main.css";
import img from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpg";
import img3 from "../../Assets/image3.jpg";
import img4 from "../../Assets/image4.gif";

import { HiLocationMarker } from "react-icons/hi";
import { TbClipboardCheck } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Mumbai",
    location: "New zeeland",
    grade: "CULTURAL RELAX",
    fees: "$2000",
    description:
      "uhsadhfosa oijajdslaj jl jkjjajd oijla uojma iojdsa yjjs n ijoasoas hojoj yy jshiukn oiuuaouojalnln yt jiij hsyu jjjkkjkj oiuS IKAKMSK IUKJK jiuij jjaoijxoda jjjj jjyuai huia ijjjoa iouojojo t6ryfwdi ijoajas ",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Nagpur",
    location: "New zeeland",
    grade: "CULTURAL RELAX",
    fees: "$2000",
    description:
      "uhsadhfosa oijajdslaj jl jkjjajd oijla uojma iojdsa yjjs n ijoasoas hojoj yy jshiukn oiuuaouojalnln yt jiij hsyu jjjkkjkj oiuS IKAKMSK IUKJK jiuij jjaoijxoda jjjj jjyuai huia ijjjoa iouojojo t6ryfwdi ijoajas ",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Mumbai",
    location: "New zeeland",
    grade: "CULTURAL RELAX",
    fees: "$2000",
    description:
      "uhsadhfosa oijajdslaj jl jkjjajd oijla uojma iojdsa yjjs n ijoasoas hojoj yy jshiukn oiuuaouojalnln yt jiij hsyu jjjkkjkj oiuS IKAKMSK IUKJK jiuij jjaoijxoda jjjj jjyuai huia ijjjoa iouojojo t6ryfwdi ijoajas ",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Mumbai",
    location: "New zeeland",
    grade: "CULTURAL RELAX",
    fees: "$2000",
    description:
      "uhsadhfosa oijajdslaj jl jkjjajd oijla uojma iojdsa yjjs n ijoasoas hojoj yy jshiukn oiuuaouojalnln yt jiij hsyu jjjkkjkj oiuS IKAKMSK IUKJK jiuij jjaoijxoda jjjj jjyuai huia ijjjoa iouojojo t6ryfwdi ijoajas ",
  },
];

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="contient flex">
                    <HiLocationMarker className="icon" />
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

                  <button className="btn flex">
                    DETAILS <TbClipboardCheck className="icon" />
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

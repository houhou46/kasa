import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Rental.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Rental() {
  const location = useLocation();
  console.log("location:", location);
  console.log("rent id is :", location.state.logementId);

  const [rent, setRent] = useState(null);
  useEffect(fetchRentalData, [location.state.logementId]);

  function fetchRentalData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((rents) => {
        const rent = rents.find(
          (rent) => rent.id === location.state.logementId
        );
        setRent(rent);
      })
      .catch(console.error);
  }
  if (rent == null) return <div>Error</div>;

  return (
    <>
      <Header />
      <div className="rentalpage">
        <div>
          <img src={rent.cover} alt="living room" />
          {/*<img src={require("../../assets/arrow_left.png")} alt="arrow"></img>*/}
        </div>
        <div></div>
        <div className="rental">
          <div className="rental__top">
            <div>
              <h1>{rent.title}</h1>
              <h2>{rent.location}</h2>
            </div>
            <div className="rental__all">
              <div className="rental__owner">
                <h4>{rent.host.name}</h4>
                <img
                  src={rent.host.picture}
                  className="rental__id"
                  alt="host"
                ></img>
              </div>
              <div className="rental__stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <FaStar className={rent.rating > num ? "on" : ""} />
                ))}
              </div>
            </div>
          </div>
          <div className="rental__tag">
            {rent.tags.map((tag) => (
              <h3 key={tag}>{tag}</h3>
            ))}
          </div>

          <div className="flex">
            <Dropdown title="Description" content={rent.description} />
            <Dropdown
              title="Equipement"
              content={rent.equipments.map((eq) => (
                <li>{eq}</li>
              ))}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

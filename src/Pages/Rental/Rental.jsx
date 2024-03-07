import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Rental.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Rental() {
  const { logementId } = useParams();
  const [rent, setRent] = useState({ pictures: [], tags: [], equipments: [] });
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(fetchRentalData, [logementId, navigate]);

  function fetchRentalData() {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((rents) => {
        const finded = rents.find((rent) => rent.id === logementId);
        console.log(finded);
        // Utiliser useNavigate pour rediriger vers la page d'accueil
        if (finded == null) return navigate("/");
        setRent(finded);
      })
      .catch(console.error);
  }
  const previousSlide = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(rent.pictures.length - 1);
    }
  };
  const nextSlide = () => {
    if (index + 1 < rent.pictures.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  //const nextSlide = () => {
  //setCurrentPicture((currentPicture +1 ) % pictures.length)
  //}

  //const previousSlide

  return (
    <>
      <Header />
      <div className="rentalpage">
        <div className="rentalpic">
          <img src={rent.pictures[index]} alt="living room" />
          <img
            src={require("../../assets/arrow_left.png")}
            alt="arrow"
            className="rentalpic__left"
            onClick={previousSlide}
          />
          <img
            src={require("../../assets/arrow_right.png")}
            alt="arrow"
            className="rentalpic__right"
            onClick={nextSlide}
          />
        </div>
        <div className="slide">
          {index + 1} / {rent.pictures.length}
        </div>
        <div className="rental">
          <div className="rental__top">
            <div>
              <h1>{rent.title}</h1>
              <h2>{rent.location}</h2>
            </div>
            <div className="mobile">
              <div className="rental__all">
                <div className="rental__owner">
                  <h4>{rent.host?.name}</h4>
                  <img
                    src={rent.host?.picture}
                    className="rental__id"
                    alt="host"
                  ></img>
                </div>
                <div className="rental__stars">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <FaStar
                      key={num}
                      className={rent.rating >= num ? "on" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rental__tag">
              {rent.tags.map((tag) => (
                <h3 key={tag}>{tag}</h3>
              ))}
            </div>
          </div>

          <div className="flex">
            <Dropdown title="Description" content={rent.description} />
            <Dropdown
              title="Equipement"
              content={rent.equipments.map((eq) => (
                <li key={eq}>{eq}</li>
              ))}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

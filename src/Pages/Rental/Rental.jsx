import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Rental.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
export default function Rental() {
  return (
    <>
      <Header />
      <div className="rentalpage">
        <div>
          <img src={require("../../assets/rent1.png")} alt="living room" />
        </div>
        <div></div>
        <div className="rental">
          <h1>Cozy loft on the Canal St Martin</h1>
          <h2>Paris, île-de-France</h2>
          <div className="rental__tag">
            <h3>Cozy</h3>
            <h3>Canal</h3>
            <h3>Paris 10 </h3>
          </div>
          <div className="rental__owner">
            <h4>Alexandre Dumas</h4>
            <div className="rental__id"></div>
            <div className="rental__stars">
              <i class="fa-xs fa-solid fa-star "></i>
              <i class="fa-xs fa-solid fa-star"></i>
              <i class="fa-xs fa-solid fa-star"></i>
              <i class="fa-xs fa-solid fa-star"></i>
              <i class="fa-xs fa-solid fa-star"></i>
            </div>
          </div>
          <div className="flex">
            <Dropdown />
            <Dropdown />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

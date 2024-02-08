import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Error.scss"
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <h1>404</h1>
        <h2> Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;

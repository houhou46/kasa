import React from 'react';
import "./Dropdown.scss"
import { useState } from 'react';

const Dropdown = (props) => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }
    return (
        <div className="appartment__description">
        <p className="description__header">
          <span>Description</span>
          <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
          </p>
        <p className="description__content">Vous serez à 50m du canal St Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.Au coeur de Paris avec 5 lignes de métro et de nombreux bus.Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.Vous êtes à 1 station de la gare de l'est(7minutes à pied)</p>
        {isContentVisible && <p className="description__content">{props.content}</p>}
      </div>
    );
};

export default Dropdown;
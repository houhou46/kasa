import React, { useState } from 'react';
import "./Dropdown.scss"


const Dropdown = (props) => {
 const [IsContentVisible, setIsContentVisible]= useState(false)
 const showContent = () => {
  setIsContentVisible(!IsContentVisible)
 }
 
    return (
        <div className="appartment__description">
        <p className="description__header">
          <span>{props.title}</span>
          <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
          </p>
        <p className="description__content">{props.description}</p>
        {IsContentVisible && <p className="description__content">{props.description}</p>}
      </div>
    );
};

export default Dropdown;
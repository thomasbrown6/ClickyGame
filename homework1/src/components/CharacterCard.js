import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <img id={props.id} className="click-item shake" alt="character" src={props.image} />

);

export default CharacterCard;
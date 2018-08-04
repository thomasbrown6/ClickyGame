import React from "react";
import "./CharacterCard.css";


const CharacterCard = props => (

    <img
    onClick={() => props.handleClick(props.value, props.id)} 
    id={props.id} 
    className="click-item shake" 
    value={props.value} 
    alt="character" 
    src={props.image} 
    />

);

export default CharacterCard;
import React from "react";
import "./Header.css";

const Header = props => (
    <header className="header">
        <h1>{props.heading}</h1>
        <h2>{props.subHeading}</h2>
    </header>
)


export default Header;
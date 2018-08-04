import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">{props.title}</a>
            </li>
            <li>
                {props.message}
            </li>
            <li>
            Score: {props.score} | 
            Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
);

export default Navbar;

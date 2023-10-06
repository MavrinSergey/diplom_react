import React from "react";
import header from "./Header.module.css";

const Header = () => {
    return  (
    <header className = {header.header}>
        <div className = {header.left}>
            <button className="btn" id="open-aside">☰</button>
        </div>
        <div className = {header.right}>
            <button id="open-form-sign" className="btn">Sign</button>
            <button id="log-out" className="btn">Log out</button>
        </div>
    </header>
    )
}

export default Header
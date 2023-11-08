import React from "react";
import sidebar from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside id="#" className={sidebar.sidebar}>
            <NavLink to="/board" className={sidebar.link} id="open-ScrumBoard">ScrumBoard</NavLink>
            <NavLink to="/projects" className={sidebar.link} id="open-ScrumBoard">Projects</NavLink>
        </aside>
    )
}

export default Sidebar

import React from "react";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
    return  (
        <aside id="#" className={sidebar.sidebar}>
            <a href="#" className={sidebar.link} id="open-ScrumBoard">ScrumBoard</a>
            <a href="#" className={sidebar.link} id="open-ScrumBoard">Projects</a>
        </aside>
    )
}

export default Sidebar

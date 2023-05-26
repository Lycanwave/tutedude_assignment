import React from "react";
import "./navbar.css";
import navbar_logo from "../assets/navbar_logo.svg";
import down_arrow from "../assets/down_arrow.svg";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar_logo">
                <img style={{ width: "160px" }} src={navbar_logo} alt="" />
            </div>

            <div className="right_navbar">
                <div className="right_navbar_item">My Assignment</div>
                <div className="right_navbar_item">Chat with Mentor</div>
                <div className="right_navbar_item_profile">
                    ProfileName
                    <span style={{ marginLeft: "16px", marginBottom: "3px" }}>
                        <img src={down_arrow} alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

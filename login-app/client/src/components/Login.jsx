import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import "../CSS/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            {/* <div className="body"> */}

            <h1 className="heading" style={{ fontSize: "7rem" }}>
                Choose Your Role
            </h1>
            <div className="image-container">
                <div className="vendor-login login-items">
                    <Link to="/vendorusername"><img src={img1} alt="1 desc" height={100} /></Link>
                    <h1>Vendor</h1>
                </div>
                <div className="client-login login-items">
                    <Link to="/clientusername"><img src={img2} alt=" 2 desc" /></Link>
                    <h1>Client</h1>
                </div>
                <div className="organizer-login login-items">
                    <Link to="/organizerusername"><img src={img3} alt=" 3 desc" /></Link>
                    <h1>Organizer</h1>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Login;
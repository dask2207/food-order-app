import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
    <div className="head-container">
        <div className="logo-container">
            <img src={LOGO_URL}  alt="Logo" className="logo" />
        </div>

        <div className="menu-container">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
}


export default Header;
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="head-container">
        <div className="logo-container">
            <img src={LOGO_URL}  alt="Logo" className="logo" />
        </div>

        <div className="menu-container">
            <ul>
                <li>Online Status : { onlineStatus ? "✅" : "🔴"}</li>
                <li><Link to="/" className="navLink">Home</Link></li>
                <li><Link to="/about" className="navLink">About us</Link></li>
                <li><Link to="/contact" className="navLink">Contact us</Link></li>
                <li><Link to="/grocery" className="navLink">Grocery</Link></li>
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
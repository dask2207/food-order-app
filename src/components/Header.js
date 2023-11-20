import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="flex justify-between  shadow-md">
        <div className="logo-container p-5 px-10">
            <img src={LOGO_URL}  alt="Logo" className="w-24" />
        </div>

        <div className="flex items-center">
            <ul className="flex p-4 m-4 font-normal text-lg">
                <li className="p-4 ">Online Status : { onlineStatus ? "✅" : "🔴"}</li>
                <li className="p-4"><Link to="/" className="navLink">Home</Link></li>
                <li className="p-4"><Link to="/about" className="navLink">About us</Link></li>
                <li className="p-4"><Link to="/contact" className="navLink">Contact us</Link></li>
                <li className="p-4"><Link to="/grocery" className="navLink">Grocery</Link></li>
                <li className="p-4">Cart</li>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
}


export default Header;
import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //Subscribing to the store using a selector (hooks in react)

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

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
                <li className="p-4"><Link to="/cart" className="navLink"> Cart ({cartItems.length})</Link></li>
                <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
                <li className="p-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    )
}


export default Header;
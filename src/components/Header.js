import React from "react";
import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
// import logo from '../images/namaste-logo.png'
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
    // <div className=" flex justify-between  shadow-md w-full bg-gray-800 text-white">
    //     <div className="logo-container p-5 px-10">
    //         <img src={LOGO_URL}  alt="Logo" className="w-[85px]" />
    //     </div>

    //     <div className="flex items-center ">
    //         <ul className="flex p-4 m-4 font-normal text-lg">
    //             <li className="p-4 ">{ onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
    //             <li className="p-4"><Link to="/" className="navLink">Home</Link></li>
    //             <li className="p-4"><Link to="/about" className="navLink">About us</Link></li>
    //             <li className="p-4"><Link to="/contact" className="navLink">Contact us</Link></li>
    //             <li className="p-4"><Link to="/grocery" className="navLink">Grocery</Link></li>
    //             <li className="p-4"><Link to="/cart" className="navLink"> Cart ({cartItems.length})</Link></li>
    //             <button className="login" onClick={()=>{
    //                 btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    //             }}>{btnName}</button>
    //             <li className="p-4 font-bold">{loggedInUser}</li>
    //         </ul>
    //     </div>
    // </div>




<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        <img src={LOGO_URL}  alt="Logo" className="w-[85px]" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"  aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>{ onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
        <li>
          <Link to="/" className="navLink" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navLink" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="/grocery" className="navLink" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Grocery</Link>
        </li>
        <li>
          <Link to="/cart" className="navLink" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart ({cartItems.length})</Link>
        </li>
        <li>
          <a href="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>

        <li className="font-bold">{loggedInUser}</li>
      </ul>
    </div>
  </div>
</nav>

    )
}


export default Header;


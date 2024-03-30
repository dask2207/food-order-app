import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100 p-2 w-screen h-screen">
            <h1 className="text-center font-bold text-3xl p-4 m-4">Contact Us</h1>
            <div className="flex items-center justify-center">
                <form className="py-10 bg-gray-400 w-80 flex align-center justify-center rounded-lg flex-col  items-center">
                    <input type="text" className="border border-gray-300 p-2 m-2 outline-none" placeholder="Name" />
                    <input type="email" className="border border-gray-300 p-2 m-2 outline-none" placeholder="Email" /> 
                    <input type="text" className="border border-gray-300 p-2 m-2 outline-none" placeholder="Message" />
                    <button className="bg-blue-600 text-white p-2 m-2 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
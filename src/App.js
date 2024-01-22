import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//lazy loading, chunking, codespilliting, Dynamic Bundaling, Dynamix import

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {


    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name :"Krishna das"
        };

        setUserName(data.name);
    }, [])


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className=" w-100">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouters = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },{
                path:"/grocery",
                element : <Suspense fallback={<h1>Loading ...</h1>}><Grocery /></Suspense>
            },
            {
                path : "/restaurent/:resId",
                element : <RestaurentMenu />
            },
            {
                path : "/cart",
                element : <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouters} />);
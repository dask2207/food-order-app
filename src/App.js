import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


//lazy loading, chunking, codespilliting, Dynamic Bundaling, Dynamix import

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
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
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouters} />);
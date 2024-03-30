var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdomclient = require("react-dom/client");
var $9WItx$reactrouterdom = require("react-router-dom");
var $9WItx$reactredux = require("react-redux");
var $9WItx$reduxjstoolkit = require("@reduxjs/toolkit");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire90dd"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire90dd"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("4HTXS", function(module, exports) {
module.exports = Promise.resolve(require("./Grocery.48bcef11.js")).then(()=>parcelRequire("cvbQ8"));

});






const $ba25bcc3a89e85d8$export$31adfacaf07ffe63 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const $ba25bcc3a89e85d8$export$8878ead86ed0da0b = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_ulieTqHiPHn4AENW1oq01BtzsBWBCwJ2Q&usqp=CAU";
const $ba25bcc3a89e85d8$export$cd85698b2b1026a5 = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";




const $601ff10f777baa0d$var$useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = (0, $9WItx$react.useState)(true);
    (0, $9WItx$react.useEffect)(()=>{
        window.addEventListener("offline", ()=>setOnlineStatus(false));
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    }, []);
    return onlineStatus;
};
var $601ff10f777baa0d$export$2e2bcd8739ae039 = $601ff10f777baa0d$var$useOnlineStatus;



const $3b698a65b839b385$var$UserContext = /*#__PURE__*/ (0, $9WItx$react.createContext)({
    loggedInUser: "Default user"
});
var $3b698a65b839b385$export$2e2bcd8739ae039 = $3b698a65b839b385$var$UserContext;



const $76d3f03a03a6aeec$var$Header = ()=>{
    const [btnName, setBtnName] = (0, $9WItx$react.useState)("Login");
    const onlineStatus = (0, $601ff10f777baa0d$export$2e2bcd8739ae039)();
    const { loggedInUser: loggedInUser } = (0, $9WItx$react.useContext)((0, $3b698a65b839b385$export$2e2bcd8739ae039));
    //Subscribing to the store using a selector (hooks in react)
    const cartItems = (0, $9WItx$reactredux.useSelector)((store)=>store.cart.items);
    console.log(cartItems);
    return(// <div className=" flex justify-between  shadow-md w-full bg-gray-800 text-white">
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
    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("nav", {
        class: "bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50",
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            class: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                    href: "/",
                    class: "flex items-center space-x-3 rtl:space-x-reverse",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                        src: (0, $ba25bcc3a89e85d8$export$8878ead86ed0da0b),
                        alt: "Logo",
                        className: "w-[85px]"
                    })
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    class: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                            class: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("svg", {
                            class: "w-5 h-5",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 17 14",
                            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("path", {
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M1 1h15M1 7h15M1 13h15"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                    class: "hidden w-full md:block md:w-auto",
                    id: "navbar-default",
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("ul", {
                        class: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: onlineStatus ? "Online \u2705" : "Offline \uD83D\uDD34"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                                    href: "/",
                                    class: "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
                                    "aria-current": "page",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                                    href: "/about",
                                    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                                    href: "/grocery",
                                    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Grocery"
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("a", {
                                    href: "/cart",
                                    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: [
                                        "Cart (",
                                        cartItems.length,
                                        ")"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("a", {
                                    href: "/contact",
                                    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                className: "login",
                                onClick: ()=>{
                                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                                },
                                children: btnName
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("li", {
                                className: "font-bold",
                                children: loggedInUser
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
var $76d3f03a03a6aeec$export$2e2bcd8739ae039 = $76d3f03a03a6aeec$var$Header;






const $05d363bedf3138f4$var$Card = (props)=>{
    const { resData: resData } = props;
    const { cloudinaryImageId: cloudinaryImageId, name: name, cuisines: cuisines, avgRating: avgRating, costForTwo: costForTwo } = resData?.info;
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "m-4 p-4 w-[245px] bg-gray-200 h-[350px] hover:bg-gray-300 rounded-lg",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                src: (0, $ba25bcc3a89e85d8$export$31adfacaf07ffe63) + cloudinaryImageId,
                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h3", {
                className: "p-1 pt-2 font-bold",
                children: name
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h4", {
                className: "p-1",
                children: cuisines.slice(0, 2).join(" ,") + " ..."
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h4", {
                className: "p-1",
                children: [
                    avgRating,
                    " stars"
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h4", {
                className: "p-1",
                children: costForTwo
            })
        ]
    });
};
const $05d363bedf3138f4$export$ccb02a230af14023 = (Card)=>{
    return (props)=>{
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("label", {
                    className: "absolute bg-black text-white p-2 m-2 rounded-lg",
                    children: "Open"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)(Card, {
                    ...props
                })
            ]
        });
    };
};
var $05d363bedf3138f4$export$2e2bcd8739ae039 = $05d363bedf3138f4$var$Card;




const $419eceeb2d42a77a$var$Shimmer = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "container justify-center flex flex-wrap ",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: " w-[350px] h-[50px]  bg-gray-200 m-4 my-10"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: " w-[350px] h-[50px]  bg-gray-200 m-4 my-10"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: " w-[300px] h-[50px]  bg-gray-200 m-4 my-10"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: " w-[200px] h-[50px]  bg-gray-200 m-4 my-10"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "w-[100%] m-auto container justify-center flex flex-wrap ",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4 w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4 w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4 w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4  w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4  w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4  w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4  w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "m-4 p-4 w-[20%] bg-gray-200 h-[370px] hover:bg-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[150px] rounded-tr-lg rounded-tl-lg bg-slate-100"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "w-[100%] h-[20px] bg-slate-100 my-6"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $419eceeb2d42a77a$export$2e2bcd8739ae039 = $419eceeb2d42a77a$var$Shimmer;





const $889bfb1e3e9bfc80$var$Body = ()=>{
    const [listOfRestaurents, setListOfRestaurants] = (0, $9WItx$react.useState)([]); //useState(resList)  before we using useEffect
    const [filteredRestaurents, setFilteredRestaurents] = (0, $9WItx$react.useState)([]);
    const [searchText, setSearchTest] = (0, $9WItx$react.useState)("");
    // console.log(listOfRestaurents);
    const RestaurantCardPromoted = (0, $05d363bedf3138f4$export$ccb02a230af14023)((0, $05d363bedf3138f4$export$2e2bcd8739ae039));
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6266383&lng=77.0611235&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        // Optional chaining 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = (0, $601ff10f777baa0d$export$2e2bcd8739ae039)();
    if (onlineStatus === false) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
        children: "Look Like You Are Offline! Please Check Your Internet."
    });
    // Condinational Rebdering
    // if(listOfRestaurents.length === 0){
    //     return <Shimmer />;
    // }
    // Now we use ternary operator insted of if condition 
    const { loggedInUser: loggedInUser, setUserName: setUserName } = (0, $9WItx$react.useContext)((0, $3b698a65b839b385$export$2e2bcd8739ae039));
    return listOfRestaurents.length === 0 ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $419eceeb2d42a77a$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "body-container w-10/12 m-auto",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "container w-12/12 justify-center flex flex-wrap",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "search m-4 p-4",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                                type: "text",
                                className: " border border-solid border-grey px-8 py-3 outline-none rounded-bl-lg rounded-tl-lg",
                                value: searchText,
                                onChange: (e)=>{
                                    setSearchTest(e.target.value);
                                },
                                placeholder: "Search..."
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                className: " px-8 py-3 border border-solid border-green bg-green-200 my-4 rounded-tr-lg rounded-br-lg",
                                onClick: ()=>{
                                    console.log(searchText);
                                    const filterRestaurents = listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                    setFilteredRestaurents(filterRestaurents);
                                },
                                children: "Search"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: "px-4 py-3 bg-gray-200 m-4 rounded-lg",
                            onClick: ()=>{
                                const filteredList = filteredRestaurents.filter((res)=>res.info.avgRating > 4);
                                setFilteredRestaurents(filteredList);
                            },
                            children: "Top Rated Restaurants"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "w-[100%] m-auto container justify-center flex flex-wrap",
                children: [
                    filteredRestaurents.map((resturant, index)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Link), {
                            className: "body-anchor",
                            to: "/restaurent/" + resturant.info.id,
                            children: resturant.info.isOpen ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)(RestaurantCardPromoted, {
                                resData: resturant
                            }) : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $05d363bedf3138f4$export$2e2bcd8739ae039), {
                                resData: resturant
                            })
                        }, resturant.info.id)),
                    " "
                ]
            })
        ]
    });
};
var $889bfb1e3e9bfc80$export$2e2bcd8739ae039 = $889bfb1e3e9bfc80$var$Body;




const $ab965e02cbeecf06$var$Contact = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "bg-gray-100 p-2 w-screen h-screen",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                className: "text-center font-bold text-3xl p-4 m-4",
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("form", {
                    className: "py-10 bg-gray-400 w-80 flex align-center justify-center rounded-lg flex-col  items-center",
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                            type: "text",
                            className: "border border-gray-300 p-2 m-2 outline-none",
                            placeholder: "Name"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                            type: "email",
                            className: "border border-gray-300 p-2 m-2 outline-none",
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                            type: "text",
                            className: "border border-gray-300 p-2 m-2 outline-none",
                            placeholder: "Message"
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                            className: "bg-blue-600 text-white p-2 m-2 rounded-lg",
                            children: "Submit"
                        })
                    ]
                })
            })
        ]
    });
};
var $ab965e02cbeecf06$export$2e2bcd8739ae039 = $ab965e02cbeecf06$var$Contact;





class $4c5cd3c7e5dc49b3$var$UserClass extends (0, ($parcel$interopDefault($9WItx$react))).Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    // console.log(this.props.name + "Child constructor");
    }
    componentDidMount() {
        console.log(this.props.name + "Child componentDidMount");
    // this.timer = setInterval(()=>{
    //     console.log("Namaste");
    // }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        // if(this.state.count != prevState.count){
        // } //Here we using the place of useEffect(()=>{},[count]) dependency count 
        // if(this.state.count != prevState.count || this.state.count2 != prevState.count2){
        // } //Here we using the place of useEffect(()=>{},[count, count2]) dependency count 
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("componentWillUnmount");
    }
    render() {
        // console.log(this.props.name +"Child render");
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "user-card",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: this.props.image
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h2", {
                    children: [
                        "Name : ",
                        this.props.name
                    ]
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h3", {
                    children: [
                        "Profile : ",
                        this.props.profile
                    ]
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h3", {
                    children: [
                        "Contact : ",
                        this.props.contact
                    ]
                })
            ]
        });
    }
}
var $4c5cd3c7e5dc49b3$export$2e2bcd8739ae039 = $4c5cd3c7e5dc49b3$var$UserClass;



class $fb36506a31b34341$var$About extends (0, ($parcel$interopDefault($9WItx$react))).Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/dask2207");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log(json);
    }
    render() {
        const { name: name, location: location, avatar_url: avatar_url, url: url } = this.state.userInfo;
        return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "p-10  text-center text-lg font-semibold",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                    children: "About"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                    children: "This is About Us Page"
                }),
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $4c5cd3c7e5dc49b3$export$2e2bcd8739ae039), {
                    name: name,
                    profile: url,
                    // image={avatar_url}
                    contact: "9958284356 (Class)"
                })
            ]
        });
    }
}
var /*
    CALLING CYCLE =====

    -Parent constructor
    -Parent render
     
     -First Child Constructor
     -First Child Render
     -Second child constructor
     -second child render
     -third child constructor
     -third child render

     <---- Dom updating - In Single Bacth ----->

     -First child componentDidMount
     -Second child componentDidMount
     -Third child componentDidMount
     
    -Parent componentDidMount


*/ $fb36506a31b34341$export$2e2bcd8739ae039 = $fb36506a31b34341$var$About;






const $8c0d5f82ad8f02d9$var$useRestaurentMenu = (resId)=>{
    const [resMenu, setResInfo] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        const data = await fetch((0, $ba25bcc3a89e85d8$export$cd85698b2b1026a5) + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resMenu;
};
var $8c0d5f82ad8f02d9$export$2e2bcd8739ae039 = $8c0d5f82ad8f02d9$var$useRestaurentMenu;









const $0129eb329969db4f$var$cartSlice = (0, $9WItx$reduxjstoolkit.createSlice)({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            //Mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});
const { addItem: $0129eb329969db4f$export$fb9705de59d96855, removeItem: $0129eb329969db4f$export$fe2d9b4e03920b4c, clearCart: $0129eb329969db4f$export$810121176e3e3671 } = $0129eb329969db4f$var$cartSlice.actions;
var $0129eb329969db4f$export$2e2bcd8739ae039 = $0129eb329969db4f$var$cartSlice.reducer;


const $5c780031869b2f91$var$ItemList = ({ items: items })=>{
    // console.log(items);
    const dispatch = (0, $9WItx$reactredux.useDispatch)();
    const handleAddItem = (item)=>{
        //dispatch an action
        dispatch((0, $0129eb329969db4f$export$fb9705de59d96855)(item));
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        children: items.map((item)=>/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "border-b-2 p-2 m-2 text-left flex justify-between",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "w-10/12",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "py-2",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "font-bold",
                                        children: item.card.info.name
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("span", {
                                        children: [
                                            " ",
                                            " - ",
                                            " ",
                                            " \u20B9 ",
                                            item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                className: "text-xs",
                                children: item.card.info.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "w-2/12  border-gray-300 border",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                                className: "absolute",
                                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                                    className: "p-2 bg-black text-white shadow-lg ",
                                    onClick: ()=>handleAddItem(item),
                                    children: "Add +"
                                })
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                                src: (0, $ba25bcc3a89e85d8$export$31adfacaf07ffe63) + item.card.info.imageId,
                                className: "w-full "
                            })
                        ]
                    })
                ]
            }, item.card.info.id))
    });
};
var $5c780031869b2f91$export$2e2bcd8739ae039 = $5c780031869b2f91$var$ItemList;


const $22a206c3f755b9b2$var$RestaurantCategory = ({ data: data, showItems: showItems, setShowIndex: setShowIndex })=>{
    // console.log(data);
    const handleClick = ()=>{
        setShowIndex();
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
            className: "w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4 ",
            children: [
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                    className: "flex justify-between cursor-pointer",
                    onClick: handleClick,
                    children: [
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("span", {
                            className: "font-bold text-lg",
                            children: [
                                data.title,
                                " (",
                                data.itemCards.length,
                                ")"
                            ]
                        }),
                        /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                            children: "\uD83D\uDD3D"
                        })
                    ]
                }),
                showItems && /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $5c780031869b2f91$export$2e2bcd8739ae039), {
                    items: data.itemCards
                })
            ]
        })
    });
};
var $22a206c3f755b9b2$export$2e2bcd8739ae039 = $22a206c3f755b9b2$var$RestaurantCategory;




const $70ad1a56d9e0d28d$var$RestaurentMenu = ()=>{
    const { resId: resId } = (0, $9WItx$reactrouterdom.useParams)();
    const resMenu = (0, $8c0d5f82ad8f02d9$export$2e2bcd8739ae039)(resId);
    const [showIndex, setShowIndex] = (0, $9WItx$react.useState)(null);
    if (resMenu === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $419eceeb2d42a77a$export$2e2bcd8739ae039), {});
    const { name: name, costForTwoMessage: costForTwoMessage, cuisines: cuisines } = resMenu?.cards[0]?.card?.card?.info;
    const { itemCards: itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                className: "font-bold text-2xl my-6",
                children: name
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h2", {
                className: "font-bold text-lg",
                children: [
                    cuisines.join(", "),
                    " - ",
                    costForTwoMessage
                ]
            }),
            categories.map((category, index)=>// Controll components
                /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $22a206c3f755b9b2$export$2e2bcd8739ae039), {
                    data: category?.card?.card,
                    showItems: index === showIndex ? true : false,
                    setShowIndex: ()=>setShowIndex((prevIndex)=>prevIndex === index ? null : index)
                }, category?.card?.card?.title))
        ]
    });
};
var $70ad1a56d9e0d28d$export$2e2bcd8739ae039 = $70ad1a56d9e0d28d$var$RestaurentMenu;




const $7cf09d846b9a3d57$var$Error = ()=>{
    const err = (0, $9WItx$reactrouterdom.useRouteError)();
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                children: "Oops"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                children: "Page Not Found"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("p", {
                children: [
                    err.status,
                    " : ",
                    err.statusText
                ]
            })
        ]
    });
};
var $7cf09d846b9a3d57$export$2e2bcd8739ae039 = $7cf09d846b9a3d57$var$Error;







const $db1c51eab30fa8e9$var$appStore = (0, $9WItx$reduxjstoolkit.configureStore)({
    reducer: {
        cart: (0, $0129eb329969db4f$export$2e2bcd8739ae039)
    }
});
var $db1c51eab30fa8e9$export$2e2bcd8739ae039 = $db1c51eab30fa8e9$var$appStore;






const $e0c6133c200b2797$var$Cart = ()=>{
    const cartItems = (0, $9WItx$reactredux.useSelector)((store)=>store.cart.items);
    const dispatch = (0, $9WItx$reactredux.useDispatch)();
    const handleClearCart = ()=>{
        dispatch((0, $0129eb329969db4f$export$810121176e3e3671)());
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "text-center m-4 p-4",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "Cart"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "w-6/12 m-auto",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "m-2 p-2 bg-black text-white rounded-lg",
                        onClick: handleClearCart,
                        children: "Clear Cart"
                    }),
                    cartItems.length === 0 && /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                        children: "Cart is empty. Add items to the cart."
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $5c780031869b2f91$export$2e2bcd8739ae039), {
                        items: cartItems
                    })
                ]
            })
        ]
    });
};
var $e0c6133c200b2797$export$2e2bcd8739ae039 = $e0c6133c200b2797$var$Cart;



//lazy loading, chunking, codespilliting, Dynamic Bundaling, Dynamix import
const $da11a1101b2a894a$var$Grocery = /*#__PURE__*/ (0, $9WItx$react.lazy)(()=>(parcelRequire("4HTXS")));
const $da11a1101b2a894a$var$AppLayout = ()=>{
    const [userName, setUserName] = (0, $9WItx$react.useState)();
    (0, $9WItx$react.useEffect)(()=>{
        const data = {
            name: "Krishna das"
        };
        setUserName(data.name);
    }, []);
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactredux.Provider), {
        store: (0, $db1c51eab30fa8e9$export$2e2bcd8739ae039),
        children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $3b698a65b839b385$export$2e2bcd8739ae039).Provider, {
            value: {
                loggedInUser: userName,
                setUserName: setUserName
            },
            children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: " w-100",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $76d3f03a03a6aeec$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.Outlet), {})
                ]
            })
        })
    });
};
const $da11a1101b2a894a$var$appRouters = (0, $9WItx$reactrouterdom.createBrowserRouter)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$AppLayout, {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {})
            },
            {
                path: "/about",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $fb36506a31b34341$export$2e2bcd8739ae039), {})
            },
            {
                path: "/contact",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $ab965e02cbeecf06$export$2e2bcd8739ae039), {})
            },
            {
                path: "/grocery",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$react.Suspense), {
                    fallback: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                        children: "Loading ..."
                    }),
                    children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$Grocery, {})
                })
            },
            {
                path: "/restaurent/:resId",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $70ad1a56d9e0d28d$export$2e2bcd8739ae039), {})
            },
            {
                path: "/cart",
                element: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $e0c6133c200b2797$export$2e2bcd8739ae039), {})
            }
        ],
        errorElement: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $7cf09d846b9a3d57$export$2e2bcd8739ae039), {})
    }
]);
const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdomclient))).createRoot(document.getElementById("root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $9WItx$reactrouterdom.RouterProvider), {
    router: $da11a1101b2a894a$var$appRouters
}));


//# sourceMappingURL=babel.config.js.map

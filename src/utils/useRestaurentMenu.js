import { useState, useEffect } from "react";
import { Menu_API } from "../utils/constant";



const useRestaurentMenu = (resId) => {

    const [resMenu , setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(Menu_API+resId);
        const json = await data.json();

        setResInfo(json.data);
    }

    return resMenu;
}

export default useRestaurentMenu;
import { useEffect, useState } from "react";
import { gitGifs } from "../helpers/getGifs";


export const useFetch = (category) => {
    const [hooks, sethooks] = useState({
        data:[],
        loading: true
    })
    
    useEffect(() => {
        gitGifs(category).then(resp => {
            sethooks({
                data: resp,
                loading: false  
            })
         })
    },[category])  
    return hooks;
}
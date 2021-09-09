import React  from "react"
import { useFetch } from "../hooks/useFetchGifs";
import { GifGriditem } from "./GifGriditem";


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetch(category);

   return (
       <>
         <h3>{ category }</h3>
         { loading && <p  class="animate__animated animate__flash">Loading</p>  }
        <div className="card-grid">
           
                 {
                   images.map((img) => 
                      <GifGriditem 
                                key= {img.id}
                                 { ...img } />)
                 }
                
           </div>
       </>
   )

   

}
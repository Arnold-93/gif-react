import React, { useState }  from "react";
import { AddCategoria } from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";

export const GiftExpert = () => {
    const [categories, setCategories] = useState(['One Punch']);
     
    //Si se desea agregar un nuevo valor a un arreglo se tiene que untilizar el setCategori del 
    //HUB "useState" para no mutar el arreglo en si 
   /* const handleAdd = () => {
     //forma1 ==   setCategories( [...categories, 'fdsfds'] );
      setCategories(cats => [ ...cats, 'Mario Bross' ] )
    }
    */
    return (
          <>
          <h2>GifExpertApp</h2>
           <AddCategoria setCategories = { setCategories }/>
          <hr></hr>
         
          <ol>
              {
               categories.map(category =>  
               <GifGrid
                    key={ category }  
                    category = { category }
                /> )   
              }    
          </ol>

          </>
   ) 

}
   

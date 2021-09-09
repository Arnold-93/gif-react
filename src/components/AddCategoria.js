import React, { useState }  from "react";
import PropTypes from 'prop-types';


export const AddCategoria = ({setCategories}) => {

  const [categoria, setCategoria] = useState('')
  const handleAddInputChange = (e) => { 
        setCategoria(e.target.value)
  }
     
  const handleAddSubmit = (e) => { 
    e.preventDefault();
   if( categoria.trim().length > 2){
       setCategories( cats => [ categoria, ...cats ]);
       setCategoria(" ")
   }
    

    console.log('Submit hecho')
  }         
 
    return(
        <form onSubmit = { handleAddSubmit }>
            <input
                type="text"
                value = { categoria } 
                onChange= { handleAddInputChange }
             />
        </form>
    )
 


}   
AddCategoria.propTypes = {
    setCategories:PropTypes.func.isRequired
}
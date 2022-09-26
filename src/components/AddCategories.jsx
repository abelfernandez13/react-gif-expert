import { useState } from "react";


export const AddCategories=({onNewCategory})=>{

  const [inputValue,setInputValue] =  useState('');

  const onInputChange=(event)=>{

 setInputValue(event.target.value)

  };

const onSubmit=()=>{
  event.preventDefault(); 

   if(inputValue.trim().length <= 1 ) return;
   
    onNewCategory(inputValue.trim()); 

    setInputValue('');
}
    return(
    <form onSubmit={onSubmit} >
    <input  placeholder="buscar" type="text"  value={inputValue} onChange={ onInputChange} />
    </form>
    
        )
};
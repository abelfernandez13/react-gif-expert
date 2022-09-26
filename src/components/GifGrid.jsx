import { useState,useEffect } from 'react';
// import { GetGifs } from "../helpers/getGifs";
import GifItem from './GifItem';
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({categories}) => {

const {images, isLoading} = useFetchGif(categories);

console.log(isLoading)

  return (
<>
<h3>{categories}</h3>
{

  isLoading && (<h2> Cargando </h2>)

}
<ol>  
{
  images.map( image =>{   

   return (

    <GifItem key={image.id}  
    {...image } // aqui estamos esparciendo las propiedades del image
    />

   )


    })
}

 </ol>
</>
  )
}



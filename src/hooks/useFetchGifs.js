import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// custom hook que obtiene una img de la categoria
export const useFetchGifs = (category) => {

    const [imagenes, setImages] = useState ([]);
    const [isLoading, setIsLoading] = useState( true )
   
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
   }

    useEffect( () => {
        getImages();

    }, [])
//  getGifs(category);
  return { 
    imagenes: imagenes,
    isLoading
}
  
}

///// Este es un customhook, u hook es una funcion que retorna algo 

import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs";


export const useFetchGif = (categories) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {

        const newImages = await GetGifs(categories);

        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {

        getImages()
    }, []);

    return {

        images,
        isLoading
    }

}
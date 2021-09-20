import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loaging: true
    });

    useEffect( () => {

        getGifs( category )
        .then( imgs => {
            setState({
                data: imgs,
                loaging: false
            });

        })
    }, [category])

    return state;

}
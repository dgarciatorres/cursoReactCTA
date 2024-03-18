import { useEffect, useState } from "react"

export function UseFetch(url,initialValue){
    const   [loading, setLoading] = useState(true);
    const   [error, setError] = useState(null);
    const   [data, setData] = useState(initialValue);

    useEffect(()=>{
        // salta el efecto cuando cambie la url
        fetch(url)
            .then(response=>response.json()) // primero tenemos que tranformar el response del fetch a json
            .then(data=>setData(data)) // ahora devolvemos los datos
            .catch(error=>setError(error))
            .finally(()=> setLoading(false))
    },[url])

    return{
        loading,
        error,
        data
    }
}
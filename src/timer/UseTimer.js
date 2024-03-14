import { useState, useEffect } from "react";

function getTime(date){
    let options = { hour: 'numeric', minute: 'numeric', second: 'numeric'}
    return new Intl.DateTimeFormat('es-ES',options).format(date);
}

export function UseTimer(initialDate){
    
    const[date,setDate] = useState(initialDate);

    useEffect(()=>{
            const handler = setInterval(()=>setDate(new Date()))
            return  ()=> clearInterval(handler) 
        }
    )

    return getTime(date)
}
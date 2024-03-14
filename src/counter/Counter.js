import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(10);
    
    function handelClick(){
        setCount(count+2)
    }

    return(
        <button onClick={handelClick}>count: {count}</button>
    ) 

}
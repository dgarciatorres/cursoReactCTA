import { UseTimer } from "./UseTimer";

export default function Timer(){
    const date = UseTimer(new Date()); 
    return(
        <div>{date}</div>
    )
}
import { useParams } from "react-router-dom"

export default function Pagina1(){

    const data = useParams();
    console.log(data);

    return(
        <div>Página 1</div>
    )
}
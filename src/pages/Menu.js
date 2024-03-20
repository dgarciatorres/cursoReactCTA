import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to="/pagina1/1">pagina1</Link></li>
                <li><Link to="/pagina2?name=pedro&page=1&size=25">pagina2</Link></li>
                <li><Link to="/pagina3">pagina3</Link></li>
            </ul>
        </nav>
    )
}
import { useSearchParams } from "react-router-dom";

export default function Pagina2(){

    const data = useSearchParams();
 
    // let obj = data.reduce(function(accumulator, item, index, data) {
    // // ...
    // }, [initial]);
    // [name: "pedro", page: "1", size: "25"]

    const result = [...data[0]].reduce((a,v)=>{ // coge el primer elemento del array a un array de dos dimensiones
        a[v[0]] = v[1]
        return a;
    }, {}) // primera vuelta es un objeto vacio

    console.log(result);

    return(
        <div>Página 2 {data}</div>
    )
}
import { UseFetch } from "./UseFetch";

export default function Fetch(){
    const{loading, error, data} = UseFetch("http://localhost:3000/pizzas")

    if(loading){
        return <div>Cargando...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return <>
             {/* para poder escribir js dentro del react tengo que meterlo entre llaves*/}
            {data.map(({id,name,price})=>{ // desestructurar el objeto
                return (<div key={id}>
                    <div>{id}</div>
                    <div>Nombre: <strong>{name}</strong></div>
                    <div>Precio: {price}</div>
                </div>)
            })}
        </>
}
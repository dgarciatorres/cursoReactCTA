import { UseFetch } from "./UseFetch";

function eventCarrito(pizza) {
    return new CustomEvent('carrito', {
        detail: {...pizza},
        composed: true,
        bubbles: true
    })
}

export default function Fetch() {
    const { loading, error, data } = UseFetch("http://localhost:3000/pizzas")

    if (loading) {
        return <div>Cargando...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    function handleClick(ev) {
        ev.stopPropagation(); // para el 

        const node = ev.nativeEvent.composedPath() // busca y saca el id del dataset
            .find(n => n.dataset && 'id' in n.dataset)
        if(node) { 
            const { id } = node.dataset;
            const pizza = data.find(p => p.id === id) // si exite la pizza lanza el evento
            pizza && node.dispatchEvent(eventCarrito(pizza))
        }
    }

    return <div onClick={handleClick}>
        {/* para poder escribir js dentro del react tengo que meterlo entre llaves*/}
        {data.map(({ id, name, price }) => { // desestructurar el objeto
            return (<div key={id}>
                <div>{id}</div>
                <div>Nombre: <strong>{name}</strong></div>
                <div>Precio: {price}</div>
                <button data-id={id}>Comprar</button>
            </div>)
        })}
    </div>
}
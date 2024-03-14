import style from './Calendar.module.css';
import Day from '../day/Day.js';

function* getDays(){
    for(let i=0; i<31;i++){
        yield i+1;
    }
}

export default function Calendar(){

    // function handelClick(ev){
    //    console.log(ev.target.textContent);   
    // }

    function handlerDay(day){
        console.log(day)
    }

    function handlerClick(ev){
       ev.stopPropagation();
       
       // composePath saca todo el listado de nodos del evento
       // fin busca si el nodo tiene datos y contiene la palabra 'day' en sus datos

       const node = ev.composedPath().find(n=>n.dataset && 'day' in n.dataset);
       if(node) {
            const {day} = node.dataset
            console.log(day)
       }
    }

    const days = [...getDays()] // spread operator y lo combierte en un array

    return(
        <div onClick={handlerClick} class={style.calendar}>
            {days.map(day=><Day key={day} {...{day,handlerDay}}/>)}
        </div>
    )
}
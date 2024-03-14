import  './Calendar.css';
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

    const days = [...getDays()] // spread operator y lo combierte en un array
    return(
        <div class="calendar">
            {days.map(day=><Day kay={day} {...{day,handlerDay}}/>)}
        </div>
    )
}
import  './Calendar.css'

function* getDays(){
    for(let i=0; i<31;i++){
        yield i+1;
    }
}

export default function Calendar(){
    const days = [...getDays()] // spread operator y lo combierte en un array
    return(
        <div class="calendar">
            {days.map(day=><div className={(day)%7===0||(day+1)%7===0?'oscuro':'day'} key={day}>{day}</div>)}
        </div>
    )
}
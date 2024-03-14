import './Day.css'

export default function Day(day, handlerDay){    
    function handlerClick(ev){   
        ev.stopPropagation();
        handlerDay(day);
    }

    return(
        <div onClick={handlerClick} className='day'>{day}</div>
    )
}
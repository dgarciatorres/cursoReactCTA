import style from './Day.module.css'

export default function Day(day, /* handlerDay*/){    
    function handlerClick(ev){   
        ev.stopPropagation();
        handlerDay(day);
    }

    return(
        // <div  data-day={day} onClick={handlerClick} className={style.day}>{day}</div>
        <div data-day={dia} className={style.day}>{day}</div>
    )
}
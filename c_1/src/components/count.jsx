import { useState} from "react"

export function Inventry(){

    const [counter, setCounter]=useState(0);
    const changeCount=(value)=>{
        setCounter(counter+value)
    };

    return(
        <><div className="items">
        <span>Books:{counter}</span>
        <button className="addBook" onclick={()=>changeCount(1)}>+</button>
        <button className="remBook" onclick={()=>changeCount(-1)}>-</button>
        </div>
        </>
    )
}
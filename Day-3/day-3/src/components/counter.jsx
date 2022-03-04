import { useState } from "react";

export function Counter(){

    const [counter,setCounter] = useState(0)

    const heandelChange =(value) => {
        
        setCounter(counter + value)
    }

    const heandel1Change =(value) => {
        
        setCounter((counter) *2)
    }

    return(

        <div>
            <h1>
                Counter :{counter}
            </h1>
            <button onClick={() =>heandelChange(1)}>Add</button>
            <button onClick={() =>heandelChange(-1)}>Sub</button>
            <button onClick={() =>heandel1Change(2)}>Multiply</button>
        </div>
    )
} 
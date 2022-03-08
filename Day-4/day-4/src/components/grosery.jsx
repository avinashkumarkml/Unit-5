import React from "react";

const Grosery =(prop) =>{
    return (
        <div>

        <li>{prop.list}</li>

        <button onClick={()=>{
            prop.onSelect(prop.id)
        }}>Delete</button>



        </div>

    )
}
export default Grosery

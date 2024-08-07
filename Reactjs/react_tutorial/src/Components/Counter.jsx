import React, { useState } from "react";

export default function Counter(){
    
    let [count , setCount] = useState(0)

    function increament(){
        setCount(count+1)
    }
    
    function decreament(){
        setCount(count-1)
    }
    
    function reset(){
        setCount(0)
    }
    
    return(
        <>
            <h1>Counter :- {count} </h1>

            <button className='btn' onClick={()=>(increament())}>Increament</button>

            <button className='btn' onClick={()=>(decreament())}>Decreament</button>

            <button className='btn' onClick={()=>(reset())}>Reset</button>
        </>
    )
}
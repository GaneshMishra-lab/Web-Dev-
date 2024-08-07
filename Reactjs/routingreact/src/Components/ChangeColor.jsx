import React, { useState } from "react";

export default function ChangeColor(){
    
    const [color,setcColor] =useState(["#ff0000","#0000ff","#3cb371","#ee82ee","#6a5acd","#ffa500","wheat"])

    const [index,setind]  = useState(0)
    
    const [currentColor , setColor] = useState(color[index])

    function changeColor(){
       
        
        setind(index+1)

        setColor(color[index])

        setcColor([...color , color[index]])

    }
    return(<div className="bgg" style={{backgroundColor:currentColor }}>
        <button onClick={()=>{changeColor()}}>Click me</button>
    </div>)
}
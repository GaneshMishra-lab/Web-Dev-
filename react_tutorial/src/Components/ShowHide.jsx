import React, {useState} from "react";

export default function ShowHide(props){
    
    const [visible , setVisible] = useState(true)

    function hide(){
        setVisible(false)
    }

    function show(){
        setVisible(true)
    }

    return(
        <>
            {
                visible?
                <><h1>Jesus Loves You</h1>
                <button className='btn' onClick={()=>{hide()}}>Hide it</button></>
                :
                <button className='btn' onClick={()=>{show()}}>Show it</button>
            }

            
        </>
    )
}
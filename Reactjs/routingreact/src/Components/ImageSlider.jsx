import React, { useState } from "react";
import gojo from "./Assets/gojo.webp"
import ayanokoji from "./Assets/Ayanokoji.webp"
import kakashi from "./Assets/kakashi.jpg"
import boruto1 from "./Assets/Boruto 1.jpg"
import boruto2 from "./Assets/Boruto 2.jpg"
import boruto3 from "./Assets/boruto 3.jpg"

export default function ImageSlider()
{
    
  const [img, setArr] =useState([gojo,ayanokoji,kakashi,boruto1,boruto2,boruto3])

  
  function prev(){
    setArr(
      [img[5],
        ...img]
    )
  }
    
    function next(){
        setArr([img[1],img[2],img[3],img[4],img[5], ...img])
    }
    
    return(
        
          <div  className="imgsliderBg">
              <img id="0" className="mainimg" src={img[0]} alt="" />
              <img  id="nun" src="" alt="" />

              <div className="qeueContainer">
                <img id="1" className="qeueimg" src={img[1]} alt="" />
                <img id="2" className="qeueimg" src={img[2]} alt="" />
                <img id="3" className="qeueimg" src={img[3]} alt="" />
                <img id="4" className="qeueimg" src={img[4]} alt="" />
                <img id="5" className="qeueimg" src={img[5]} alt="" />
                
                

              </div>

              <div className="btnContainer">
                <button className="btn" onClick={()=>{prev()}}> prev </button>
                <button className="btn" onClick={()=>{next()}}> next </button>
              </div>
          </div>

        
    )
}
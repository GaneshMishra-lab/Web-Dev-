import React, { useState } from "react";

export default function CountryGuide(){

    const [country , setCountry] = useState("");
    const [info , setInfo] = useState()
    const [img , setImg] = useState();
    const [name , setName] = useState();
    const [continent , setContinent] = useState();
    const [currency , setCurrency] = useState();
    const [lang , setLang] = useState();

    function getDetail(c){

        fetch(`https://restcountries.com/v3.1/name/${c}?fullText=true`)
        .then(response => response.json())
        .then((data)=>{
            console.log("ye le data",data[0])
            setInfo(data)
            setImg(data[0].flags.svg)
            setName(data[0].name.common)
            setContinent(data[0].continents[0])
            setCurrency(Object.keys(data[0].currencies)[0])
            setLang(Object.values(data[0].languages)
            
        )})
        .catch((error)=>console.error(error))
    }
    
    if(info){
        
            return(
                <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">
        
                <div className=" h-fit w-[370px] bg-white rounded-2xl flex  flex-col justify-center p-[20px] gap-[20px] items-center">
                    <div><p className="text-center font-bold">Enter Country Name</p></div>
                    <div><input type="text" name="" id=""  placeholder="Country Name" className="border-black border-2 rounded p-[2px]" value={country} onChange={(e)=>{setCountry(e.target.value)}}/></div>

                    <div className=" flex flex-col gap-[20px] item-center justify-center">

                        <img src={img} alt="" />
                        <div>Name : {name}</div>
                        <div>Contitnent : {continent}</div>
                        <div>Currency : {currency}</div>
                        <div>Languge : {lang.map((e,i)=>(<span>{lang[i]},</span>))}</div>
                
            
                    </div>
                    
        
                    <div><button onClick={()=>{getDetail(country)}} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2  my-2 rounded">Search</button></div>
        
                </div>
        
            </div>
            );
    }
    else{
        return(
            <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">
    
            <div className=" h-fit w-[370px] bg-white rounded-2xl flex  flex-col justify-center py-[20px] gap-[20px] items-center">
                <div><p className="text-center font-bold">Enter Country Name</p></div>
                <div><input type="text" name="" id=""  placeholder="Country Name" className="border-black border-2 rounded p-[2px]" value={country} onChange={(e)=>{setCountry(e.target.value)}}/></div>
                
    
                <div><button onClick={()=>{getDetail(country)}} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2  my-2 rounded">Search</button></div>
    
            </div>
    
        </div>
        );
    }
    

}
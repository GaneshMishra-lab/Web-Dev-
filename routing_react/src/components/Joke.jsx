import React, { useEffect, useState } from "react";

export default function Joke(){

    const [joke , setJoke] = useState("");
    const [d , setD] = useState("");
    const [s , setS] = useState("");
    
    useEffect(()=>{loadJoke()},[])

    function loadJoke(){

        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
        .then(response => response.json())
        .then((data)=>{

            console.log(data)
            if(data.type ==="twopart")
            {
                setJoke("")
                setD(data.delivery)
                setS(data.setup)

            }
            else{
                setD("")
                setS("")
                setJoke(data.joke)
            }
            

        })
    }
    
    return(
        <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">

            <div className="h-fit w-[600px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-[50px] gap-[40px] ">
                <h1 className="text-4xl h-fit w-fit self-center ">Joke of The Day</h1>
                <div className="text-2xl h-fit w-fit self-center text-center ">
                    <div>{joke}</div>
                    <div>{s}</div>
                    <div>{d}</div>
                     
                    
                    </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>{loadJoke()}} >New Joke</button>

            </div>

        </div>
    );
}
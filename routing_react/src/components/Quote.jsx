import React, { useEffect , useState } from "react";

export default function Quote(){
    
    const [quote , setQuote] = useState();
    const [author , setAuthor] = useState();

    useEffect(()=>{
        loadQuote();
    },[])
    
    function loadQuote(){
        fetch("https://api.quotable.io/random")
        .then(response=>response.json())
        .then((data)=>{

            console.log("le bacchi data",data)
            setQuote(data.content)
            setAuthor(data.author)
        });

    }




    return(

        <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">

            <div className="h-fit w-[600px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-[50px] gap-[40px] ">
                <h1 className="text-4xl h-fit w-fit self-center ">Quote of The Day</h1>
                <div className="text-2xl h-fit w-fit self-center text-center ">
                    <div>"{quote}"</div> <br />
                     <div>-{author}</div>
                    
                    </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={()=>{loadQuote()}} >New Quote</button>

            </div>

        </div>


    );
}
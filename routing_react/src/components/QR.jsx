import React , { useState } from "react";

export default function QR(){

   const [word , setWord] = useState("");
   const [src , setSrc] = useState();

    function generateQr(v){

       if(v.length > 0)
       {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${v}`)
        // .then(response => response.json())
        .then((data)=>{

            console.log("ye bacchi Qr le " , data)
            setSrc(data.url)


        })
    }
    else{
        console.log("noob")
    }

    
   }
    
    return(
        <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">

            <div className=" h-fit w-[370px] bg-white rounded-2xl flex  flex-col justify-center py-[20px] gap-[20px] items-center">
                <div><p className="text-center font-bold">Enter Your text or URL</p></div>
                <div><input type="text" name="" id=""  placeholder="Text or URL" className="border-black border-2 rounded p-[2px]" value={word} onChange={(e)=>{setWord(e.target.value)}}/></div>
                <div> <img src={src} alt=""/></div>
                <div><button onClick={()=>{generateQr(word)}} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2  my-2 rounded">Generate QR</button></div>

            </div>

        </div>
    );
}
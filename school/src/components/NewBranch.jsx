import React, { useState , useEffect } from 'react';

export default function NewBranch(){

    // const [branches , serBranches] = useState();
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");

    function createThis(e){
        e.preventDefault();
        
        const newBranch = {name:name , description:description}

        

        fetch("https://student-api-using-nodejs.onrender.com/branch",{
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(newBranch)
        })
        .then(response =>{
            if(!response.ok){
                throw new Error("Response was not ok")
            }
            return response.json()
        })
        .then(data=>{

            console.log("lo kardiya create")
            window.location.href='/branches'


        })

    }
    
    return(

        <div className="bg-[#334155] dark:bg-neutral-700 text-white flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-5xl">New Branch</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={createThis}>
                <div className='m-3'><label htmlFor="name">Name: </label>
                    <input className='rounded text-black px-[10px]' type="text" id='name' value={name} onChange={e=>setName(e.target.value)} />
                </div>

                <div className='m-3'>
                    <label htmlFor="description">Description: </label>
                    <input className='rounded text-black px-[10px]' type="text" id="description" value={description} onChange={e=>setDescription(e.target.value)} />
                </div>

                <dir>
                    <button className='m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center' type="submit">Create</button>
                </dir>
            </form>
        </div>

    );
}
import React, { useState ,  useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateStud(){

    const {id} = useParams()
    const [branches , setBranches] = useState();
    const [name , setName] = useState("")
    const [description , setDescription] = useState("");

    useEffect(()=>{

        fetch(`https://student-api-using-nodejs.onrender.com/branch/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data)=>{
            console.log('ye le data' , data)
            
            setBranches(data)
            setName(data.name)
            setDescription(data.description)
            
        })
        .catch(error=>console.error(error))
    },[id])

        function update(e){

            e.preventDefault();

            const updatedBranch ={...branches,name, description}

            fetch(`https://student-api-using-nodejs.onrender.com/branch/${id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(updatedBranch)

            })
            .then(Response=>Response.json())
            .then((data)=>{
                console.log(updatedBranch)
                console.log("le kardiya update",data)
                window.location.href='/branches'

            })
            .catch(error=>console.error(error))

        }
    
    
    return(
        <div className="bg-[#334155] dark:bg-neutral-700 text-white flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-5xl">Branches</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={update}>
                <div className='m-3'>
                <label htmlFor="name">Name:  </label>
                <input  className='rounded text-black px-[10px]' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className='m-3'>
                <label htmlFor="name">Description:  </label>
                <input  className='rounded text-black px-[10px]' type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>

                <dir>
                    <button className='m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center' type="submit">Update</button>
                </dir>


            </form>
        </div>
    );
}
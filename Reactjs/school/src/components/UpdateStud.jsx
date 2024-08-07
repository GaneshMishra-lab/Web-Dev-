import React, { useState ,  useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateStud(){

    const {id} = useParams()
    const [student , setStudent] = useState({});
    const [name , setName] = useState("")
    const [roll , setRoll] = useState("")
    const [email , setEmail] = useState("")
    const [branch , setBranch] = useState("")

    useEffect(()=>{

        fetch(`https://student-api-using-nodejs.onrender.com/student/${id}`)
        .then(Response => Response.json())
        .then((data)=>{
            console.log('ye le data' , data)
            
            setStudent(data)
            setName(data.name)
            setRoll(data.rollNumber)
            setEmail(data.email)
            setBranch(data.branch)
        })
        .catch(error=>console.error(error))
    },[id])

        function update(e){

            e.preventDefault();

            const updatedStud ={...student,name, rollNumber:roll,email,branch}

            fetch(`https://student-api-using-nodejs.onrender.com/student/${id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(updatedStud)

            })
            .then(Response=>Response.json())
            .then((data)=>{
                console.log(updatedStud)
                console.log("le kardiya update",data)
                window.location.href='/'

            })
            .catch(error=>console.error(error))

        }
    
    
    return(
        <div className="bg-[#334155] dark:bg-neutral-700 text-white flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-5xl" >Student's Information</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={update}>
                <div className='m-3'>
                <label htmlFor="name">Name:  </label>
                <input className='rounded text-black px-[10px]' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className='m-3'>
                <label htmlFor="name">Roll Number:  </label>
                <input className='rounded text-black px-[10px]' type="text" value={roll} onChange={(e)=>setRoll(e.target.value)} />
                </div>

                <div className='m-3'>
                <label htmlFor="name">E mail:  </label>
                <input className='rounded text-black px-[10px]' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className='m-3'>
                <label htmlFor="name">Branch:  </label>
                <input className='rounded text-black px-[10px]' type="text" value={branch} onChange={(e)=>setBranch(e.target.value)} />
                </div>

                <dir className='m-3'>
                    <button  className='m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center' type="submit">Update</button>
                </dir>


            </form>
        </div>
    );
}
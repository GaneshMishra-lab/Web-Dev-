import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Branch(){

    const [branches , setBranches] = useState();
    
    useEffect(()=>{
        
        fetch("https://student-api-using-nodejs.onrender.com/branch")
        .then(response =>{
            if(!response.ok)
            {
                throw new Error("network was not ok");
            }
            return response.json();
        })
        .then((data)=>{
            console.log('ye lo data',data);
            setBranches(data)
        })
        .catch(error=>console.error(error))
    },[])

    function deleteThis(id){

        fetch(`https://student-api-using-nodejs.onrender.com/branch/${id}`,{method:"DELETE"})
        .then(response =>{
            if(!response.ok)
            {
                throw new Error("network was not ok");
            }
            return response.json();
        })
        .then((data)=>{
            console.log('ye lo delete kardiya',data);
            setBranches(branches.filter(e=>e._id!==id))
        })
        .catch(error=>console.error(error))

    }

    return (
        <div className="bg-[#334155] dark:bg-neutral-700 text-white flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-5xl">Branches</h1>
        <Link to={"/new-branch"}> New Branch</Link>
        <div className="overflow-x-auto w-screen bg-white dark:bg-neutral-700 text-white">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
                <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Delete</th>
                    <th className="px-6 py-4">Update</th>

                </tr>
            </thead>

            <tbody>
                {
                    branches && branches.map((s,i)=>(
                        <tr className="border-b dark:border-neutral-600" key={i}>
                            <td className="px-6 py-4">{s.name}</td>
                            <td className="px-6 py-4">{s.description}</td>
                            
                            <td className="px-6 py-4"><button onClick={()=>{deleteThis(s._id)}}>Delete</button></td>
                            <td className="px-6 py-4"><Link to={`/Updation-Branch/${s._id}`}>Update</Link></td>
                        </tr>
                    ))

                }
            </tbody>
        </table>
        </div>
    </div>
    );
}
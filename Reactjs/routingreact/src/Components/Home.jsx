import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Home(){
   
    
    const [students , setStudents] = useState();
    
    useEffect(()=>{

        fetch("https://student-api-using-nodejs.onrender.com/student/")
        .then(Response => Response.json())
        .then((data) =>{
            console.log("ye le data",data);
            setStudents(data);
        })
        .catch(error=>console.log("error",error))

    },[])

    function deletethis(id){

        fetch(`https://student-api-using-nodejs.onrender.com/student/${id}` ,{ 
            method:"DELETE"
        })
        .then(Response => Response.json())
        .then((data) =>{
            console.log("ye le delete kaediya");
           setStudents( students.filter(s=>s._id!==id));
        })
        .catch(error=>console.log("error",error))


    }

   
    return(
        
        
        
            <div  className="bg-[#334155] dark:bg-neutral-700 p-[0px] m-[0px]  text-white flex flex-col justify-center items-center h-screen w-screen">
                <h1 className="text-5xl">Students</h1>
                <Link to={"/Addmission"}> New Admission</Link>
                <div className="overflow-x-auto w-screen bg-white dark:bg-neutral-700 text-white">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Roll Number</th>
                            <th className="px-6 py-4">E mail</th>
                            <th className="px-6 py-4">Branch</th>
                            <th className="px-6 py-4">Delete</th>
                            <th className="px-6 py-4">Update</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            students && students.map((s,i)=>(
                                <tr className="border-b dark:border-neutral-600" key={i}>
                                    <td className="px-6 py-4">{s.name}</td>
                                    <td className="px-6 py-4">{s.rollNumber}</td>
                                    <td className="px-6 py-4">{s.email}</td>
                                    <td className="px-6 py-4">{s.branch}</td>
                                    <td className="px-6 py-4"><button onClick={()=>{deletethis(s._id)}}>Delete</button></td>
                                    <td className="px-6 py-4"><Link to={`/Updation/${s._id}`}>Update</Link></td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
                </div>
            </div>

        
    );
}
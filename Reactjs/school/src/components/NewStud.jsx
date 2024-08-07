// import React, { useEffect } from 'react';
// import {useState} from 'react'

// export default function NewStud(){

//    const [students , setStudents] = useState({})
//     const [name , setName] = useState("")
//     const [roll , setRoll] = useState("")
//     const [email , setEmail] = useState("")
//     const [branch , setBranch] = useState("")

//     useEffect(()=>{

//         fetch("https://student-api-using-nodejs.onrender.com/student/")
//         .then(Response => Response.json())
//         .then((data) =>{
//             console.log(`ye lo save karlo ${data}`);
//             setStudents(data);
//         })
//         .catch(error=>console.log("error",error))
//     },[])
    
//     function create(e){
//         e.preventDefault();

//         const newStud = { ...students,name, roll , email , branch};

//         fetch("https://student-api-using-nodejs.onrender.com/student/" , {method:"POST" , headers:{'Content-Type':'application/json' }, body:JSON.stringify(newStud)})
//         .then(Response => Response.json())
//         .then(() =>{
//             console.log("ye le Create  kaediya",JSON.stringify(newStud));
        
//         })
//         .catch(error=>console.log("error",error))
//     }
    
    
//     return(
//         <>
//         <div className="App">
//             <h1>Addmission Portal</h1>
//             <form onSubmit={create}>
//                 <div>
//                 <label htmlFor="name">Name:  </label>
//                 <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//                 </div>

//                 <div>
//                 <label htmlFor="name">Roll Number:  </label>
//                 <input type="text" value={roll} onChange={(e)=>setRoll(e.target.value)} />
//                 </div>

//                 <div>
//                 <label htmlFor="name">E mail:  </label>
//                 <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
//                 </div>

//                 <div>
//                 <label htmlFor="name">Branch:  </label>
//                 <input type="text" value={branch} onChange={(e)=>setBranch(e.target.value)} />
//                 </div>

//                 <dir>
//                     <button type="submit">Create</button>
//                 </dir>


//             </form>
//         </div>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';

export default function NewStud() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");

    useEffect(() => {
        fetch("https://student-api-using-nodejs.onrender.com/student/")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('ye lo save karlo', data);
                setStudents(data);
            })
            .catch(error => console.log("error", error));
    }, []);

    function create(e) {
        e.preventDefault();

        const newStud = { name, rollNumber:roll, email, branch };

        fetch("https://student-api-using-nodejs.onrender.com/student/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStud)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("ye le Create kaediya", newStud);
                setStudents([...students, data]);
                window.location.href='/'
            })
            .catch(error => console.log("error", error));
    }

    return (
        <div  className="bg-[#334155] dark:bg-neutral-700 text-white flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-5xl">Admission Portal</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={create}>
                <div className='m-3'>
                    <label htmlFor="name">Name: </label>
                    <input className='rounded text-black px-[10px]'  type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='m-3'>
                    <label htmlFor="roll">Roll Number: </label>
                    <input  className='rounded  text-black px-[10px]'type="text" value={roll} onChange={(e) => setRoll(e.target.value)} required />
                </div>
                <div className='m-3'>
                    <label htmlFor="email">Email: </label>
                    <input className='rounded  text-black px-[10px]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='m-3'>
                    <label htmlFor="branch">Branch: </label>
                    <input  className='rounded  text-black px-[10px]' type="text" value={branch} onChange={(e) => setBranch(e.target.value)} required />
                </div>
                <div className='m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center'>
                    <button type="submit">Create</button>
                </div>
            </form>
     </div>
 );
}

import React, { useEffect } from "react";
import { useState } from "react";


 export default function DepartmentCreate(){

   
    
    const [name,setName] = useState("");
    const [description , setDescription] = useState("")

    useEffect(()=>{
        fetch("https://employee-api-using-nodejs.onrender.com/department")
        .then(Response => Response.json())
        .then((data)=>{

            console.log(data)
          

        })
        .catch(error=>console.log("errror hai bhai",error))
    },[])

    function createit(e){

        e.preventDefault();

        const  newDepartment = [name,description]

        fetch("https://employee-api-using-nodejs.onrender.com/department/", {method:"POST" , headers:{'Content-Type':'application/json'}, body:JSON.stringify(newDepartment)})
        .then(Response => Response.json())
        .then(()=>{
            console.log("Created");
            console.log(newDepartment)
            //  window.location.href="/department";

        })
        .catch(error=>console.log("error hai bhai",error))
        

    }

    return(
        <>
        <div className="App">        
            <h1>Department Creation Portal</h1>
            <form onSubmit={createit}>
           <div>
           <label htmlFor="name">Name:</label>
           <input type="text" value={name} id="name" onChange={(e)=>setName(e.target.value)} />
           </div>
            
            <div>
            <label htmlFor="email">Description:</label>
            <input type="text" value={description} id="email" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            
           
          
            
           <div>
           <button type="submit">Submit</button>
           </div>
        </form></div>

        </>
    );

 }
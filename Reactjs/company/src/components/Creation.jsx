import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Creation(){
    
        
        
        const [employees , setEmployees] = useState({})
    
    const [name , setName] = useState(""); 
    const [email , setEmail] = useState("");
    const [role , setRole] = useState("");
    const [salary , setSalary] = useState("");


    useEffect(()=>{
        fetch("https://employee-api-using-nodejs.onrender.com/employee")
        .then(Response => Response.json())
        .then((data)=>{
            console.log(data);
            setEmployees(data)
            
        },[])
        .catch(Error=>console.error(Error))
    })

    function createit(e){

         e.preventDefault();
        
    
        const updatedemployee = { ...employees ,name,email,role,salary}
        
        fetch("https://employee-api-using-nodejs.onrender.com/employee/", {method:"POST" , headers:{'Content-Type':'application/json'}, body:JSON.stringify(updatedemployee)})
        .then(Response=>Response.json())
        .then( ()=>{
            console.log("employee created");
            window.location.href="/";}
        )
        .catch(error=>console.error(error))
    }
    
    return(
    <>
        <div className="App">        
            <h1>Employee Creation Portal</h1>
            <form onSubmit={createit}>
           <div>
           <label htmlFor="name">Name</label>
           <input type="text" value={name} id="name" onChange={(e)=>setName(e.target.value)} />
           </div>
            
            <div>
            <label htmlFor="email">Email</label>
            <input type="text" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
           <div>
           <label htmlFor="role">Role</label>
            <input type="text" value={role} id="role" onChange={(e)=>setRole(e.target.value)} />
           
           </div>
          
            <div>
            <label htmlFor="salary">Salary</label>
            <input type="text" value={salary} id="salary" onChange={(e)=>setSalary(e.target.value)} />
            </div>
           
           <div>
           <button type="submit">Submit</button>
           </div>
        </form></div>

        </>
    );
}
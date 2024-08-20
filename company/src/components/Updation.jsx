import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Updation(){

    const [employee , setEmployee] = useState({})
    const {id} = useParams();
    const [name , setName] = useState(""); 
    const [email , setEmail] = useState("");
    const [role , setRole] = useState("");
    const [salary , setSalary] = useState("");


    useEffect(()=>{
        fetch(`https://employee-api-using-nodejs.onrender.com/employee/${id}`)
        .then(Response => Response.json())
        .then((data)=>{
            console.log(data);
            setEmployee(data)
            setName(data.name);
            setEmail(data.email);
            setRole(data.role);
            setSalary(data.salary);
        })
        .catch(Error=>console.error(Error))
    },[id])

    function updateit(e){

         e.preventDefault();
        
    
        const updatedemployee = { ...employee ,name,email,role,salary}
        
        fetch(`https://employee-api-using-nodejs.onrender.com/employee/${id}` , {method:"PUT" , headers:{'Content-Type':'application/json'}, body:JSON.stringify(updatedemployee)})
        .then(Response=>Response.json())
        .then( data=>{
            console.log("employee updated");
            window.location.href="/";}
        )
        .catch(error=>console.error(error))
    }
    
    return(
    <>
        <div className="App">        
            <h1>Employee Updation Portal</h1>
            <form onSubmit={updateit}>
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
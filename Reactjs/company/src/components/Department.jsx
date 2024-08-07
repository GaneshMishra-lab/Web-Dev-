import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Department(){

    const [departments , setDepartments] = useState(null)

    useEffect(()=>{

        fetch("https://employee-api-using-nodejs.onrender.com/department")
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            setDepartments(data);

        })
        .catch(error=>console.error(error))

        

    })

    function deletion(id){

        fetch(`https://employee-api-using-nodejs.onrender.com/department/${id}`,{method:"DELETE"})
        .then(Response => Response.json())
        .then(()=>{

            console.log("deleted")
            departments.filter(d=>d._id!==id)

        })
        .catch(error=>console.error(error))

    }

    return(
        <>
        
            <div className="container">
                <div className="App"><h1>Departments</h1></div>
                <Link to={"/create-Department"} > Create</Link>
                <div className="App">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Department Name</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                departments && departments.map((d,i)=>(
                                    <tr key={i}>
                                        <td>{d.name}</td>
                                        <td>{d.description}</td>
                                        <td><button onClick={()=>{deletion(d._id)}} >Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
import { useState } from "react";
import React, { useEffect }  from "react";
import { Link } from "react-router-dom";


export default function Home(){
    
    const [employee , SetEmployee] = useState(null);

    useEffect(()=>{
        load();
    })
    
    function load(){

        fetch("https://employee-api-using-nodejs.onrender.com/employee")
            .then(Resposne=>Resposne.json())
            .then(data=>{
                console.log(data);
                SetEmployee(data);
            })
            .catch(error=>console.error(error));
    }

    function deleteit(id){

        fetch(`https://employee-api-using-nodejs.onrender.com/employee/${id}`,{ method:'DELETE' })
            .then(Response=>Response.json())
            .then(()=>{
                SetEmployee(employee.filter(e=>e._id!==id))
            })
            .catch(error=>console.error(error));


    }
    
    
    return(
        <>
                <div className="container">
                    
                    <div className="App">
                    <h1>Employee list</h1>
                    <Link to={"/employee-create"}> Create </Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Salary</th>
                                <th>Delete</th>
                                <th>Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee && employee.map((e,index)=>(
                                    <tr>
                                        <td>{e._id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.role}</td>
                                        <td>{e.salary}</td>
                                        <td>
                                            <button onClick={()=>{deleteit(e._id)}}>Delete</button>
                                        </td>
                                        <td>
                                            <Link to={`/employee-update/${e._id}`} >Update</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


        </>
    );
}
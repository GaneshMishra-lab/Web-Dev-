import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
      <>
  <nav className="bg-[#334155] dark:bg-neutral-700  text-white w-screen  p-[0px] m-[0px]  flex justify-center items-center ">
    
    <button className="text-white focus:outline-none md:hidden" type="button" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbarNavAltMarkup">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <Link className="text-white py-2 px-4" to={"/"}>Students</Link>
        <Link className="text-white py-2 px-4" to={"/branches"}>Branches</Link>
      </div>
    </div>
  </nav>
</>

    );
}
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-4 w-screen">
        
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-gray-600 hover:border-gray-600">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center justify-center lg:w-auto">
          <div className="text-sm px-[40px] lg:flex-grow self-center">
            <Link className="block mt-4 lg:inline-block px-[20px] lg:mt-0 text-xl text-gray-800 hover:text-gray-600 mr-4" to={"/"}>Country guide</Link>
            <Link className="block mt-4 lg:inline-block px-[20px] lg:mt-0 text-xl text-gray-800 hover:text-gray-600 mr-4" to={"/quote"}>Quotes</Link>
            <Link className="block mt-4 lg:inline-block px-[20px] lg:mt-0 text-xl text-gray-800 hover:text-gray-600 mr-4" to={"/joke"}>Jokes</Link>
            <Link className="block mt-4 lg:inline-block px-[20px] lg:mt-0 text-xl text-gray-800 hover:text-gray-600" to={"/qr"}>QR</Link>
          </div>
        </div>  
      </nav>
    </>
  );
}

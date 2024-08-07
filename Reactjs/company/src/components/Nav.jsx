import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-[100vw]">
  <Link className="navbar-brand" to={"/"} >The Company</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link className="nav-link active" to={"/"} >Employee </Link>
      <Link className="nav-link" to={"/department"}  >Department</Link>
      
    </div>
  </div>
</nav>
        </>
    );
}
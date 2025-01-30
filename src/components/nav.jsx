import './nav.css';
import React from 'react';

export default function Nav(){
    const handlescroll=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    function myFunction() {
        var x = document.getElementById("navUl");
        if (x.className === "navUl") {
          x.className = "";
        } else {
          x.className = "navUl";  
    }}
    return(
        <>
        <nav>
            <span>
            <p className='navName1'>D</p>
            <p className='navName2'>INITHI</p>
            </span>
            <ul className='navUl' id='navUl'> 
                
                <li><a className='navLi'onClick={()=>handlescroll("home")} >Home</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("about")} >About</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("skills")} >Skills</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("projects")} >Projects</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("contact")} >Contact</a></li>
          

            </ul>
            <a href="javascript:void(0);" className="icon" onClick={()=>myFunction()}><i className="fa fa-bars"></i></a>
        </nav>
        </>
    )}


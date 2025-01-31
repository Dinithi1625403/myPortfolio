import './nav.css';
import React from 'react';

export default function Nav(){
    const handlescroll=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    function myFunction() {
        var z = document.getElementById("navIcon");
        var y = document.getElementsByClassName("navLi");
        var x = document.getElementById("navUl");
        x.style.display="block";
        z.style.display="none";
        x.style.backgroundColor ="rgba(41, 40, 40, 0.66)";
        x.style.width = "50%";
        
        for (var i = 0; i < y.length; i++) {
            y[i].style.width = "100%";
            y[i].style.display = "block";
            y[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = 'gray';
            });
            y[i].addEventListener('mouseout', function() {
                this.style.backgroundColor = 'rgba(41, 40, 40, 0.66)';
            });
            y[i].style.height = "40px";
            y[i].style.backgroundColor = "rgba(41, 40, 40, 0.66)";
            y[i].style.margin = "0px";
            y[i].style.padding = "0";
            y[i].style.border = "2px solid black";
        }
    }
   
    return(
        <>
        <nav>
            <span>
            <p className='navName1'>D</p>
            <p className='navName2'>INITHI</p>
            </span>
            
            <a href="javascript:void(0);" id='navIcon' className="navIcon" onClick={()=>myFunction()}><i className="fa fa-bars"></i></a>
            <ul className='navUl' id='navUl'> 
                
                <li><a className='navLi'onClick={()=>handlescroll("home")} >Home</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("about")} >About</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("skills")} >Skills</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("projects")} >Projects</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("contact")} >Contact</a></li>
          

            </ul>
        </nav>
        </>
    )}


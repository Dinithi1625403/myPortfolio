import './nav.css';
import React from 'react';

export default function Nav(){
    const handlescroll=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    document.addEventListener('click', function(event) {
        var isClickInside = document.getElementById('navUl').contains(event.target) || document.getElementById('navIcon').contains(event.target);
        if (!isClickInside) {
            document.getElementById('navUl').style.display = 'none';
            document.getElementById('navIcon').style.display = 'block';
        }
    });
    function myFunction() {
        var z = document.getElementById("navIcon");
        var y = document.getElementsByClassName("navLi");
        var x = document.getElementById("navUl");
        x.style.display="block";
        z.style.display="none";
        x.style.zIndex = "1";
        x.style.width = "50%";
        x.style.position = "absolute";
        x.style.top = "0";
        x.style.right = "10px";
        
        for (var i = 0; i < y.length; i++) {
            y[i].style.width = "100%";
            y[i].style.display = "block";
            y[i].addEventListener('mouseover', function() {
                this.style.backgroundImage = 'linear-gradient(to right,rgb(0, 255, 255,0.5),rgb(178, 0, 255,0.5))';
                
            });
            y[i].addEventListener('mouseout', function() {
                this.style.backgroundImage = 'none';
                this.style.backgroundColor = 'rgb(32, 32, 32)';
            });
            y[i].style.height = "40px";
            y[i].style.backgroundColor ="rgb(32, 32, 32)";
            y[i].style.margin = "0px";
            y[i].style.padding = "10px 60px";
            y[i].style.borderRadius = "0";
           
            
            
        }
    }
   
    return(
        <>
        <nav>
            <span>
            <p className='navName1'>D</p>
            <p className='navName2'>INITHI</p>
            </span>
            
            <a href="javascript:void(0);" id='navIcon' className="navIcon"   onClick={()=>myFunction()}><i className="fa fa-bars"></i></a>
           
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


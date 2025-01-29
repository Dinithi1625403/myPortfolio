import './nav.css';
import React from 'react';

export default function Nav(){
    const handlescroll=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
    return(
        <nav>
            <span>
            <h8 className='navName1'>D</h8>
            <h8 className='navName2'>INITHI</h8>
            </span>
            <ul>
                
                <li><a className='navLi'onClick={()=>handlescroll("home")} >Home</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("about")} >About</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("skills")} >Skills</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("projects")} >Projects</a></li>
                <li><a className='navLi'onClick={()=>handlescroll("contact")} >Contact</a></li>
          

            </ul>
        </nav>
    )
}


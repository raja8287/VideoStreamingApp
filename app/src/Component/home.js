import React from 'react';
import {Route,Routes,Link} from 'react-router-dom'
import Main from './h';
import Videos from './Video';

function Home(){
    function Al(){
        var d=document.getElementById("Nav").style.display;
        if(d=="inline-block"){
          document.getElementById("Nav").style.display="none";
            document.getElementById("Nav").style.transition="width 1s ease-in, height 1s ease-in;";
        }
        else{
            document.getElementById("Nav").style.display="inline-block";
            document.getElementById("Nav").style.transition="all 0.1s ease-out";

        }
    }
    return(
        
        <>
         <div id='ham' >
         <input type="text" placeholder='....Search' />
            <button>&#x26B2;</button>
            <span onClick={()=>{Al()}}>&#9776; </span>
        </div>
        <div id="Nav"> 
           
      

            <div>
        <Link to="/" style={{textDecoration:"none",color:"gray"}}>Home</Link>
        </div>
        <div>
            <Link to="/Videos" style={{textDecoration:"none",color:"gray"}}>Videos</Link>
        </div>
        <div style={{background:'rgba(0, 0, 0, 0.479)' }} id="in">

            <input type="text" placeholder='....Search' />
            <button>Search</button>
        </div>
        <div>
            <span>login</span>
        </div>
        </div>


        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/videos' element={<Videos/>}/>

            
            </Routes>
        </>
      
    );
}

export default Home;
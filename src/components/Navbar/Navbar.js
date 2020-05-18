import React from 'react';
import "./Navbar.css";
import Grid from '../TWGrid/TWGrid';

function Navbar(){
    return (
        
        <div className ="Navbar">
            <Grid>
            <div className="navlinks">
          
            <a className ="link w-1/3 px-8">About</a>
            <a className ="link w-1/3 px-8">Shop</a>
            <a className ="link w-1/3 px-8">Contact</a>
         
            </div>
            </Grid>
        </div>
       
    );
};

export default Navbar;

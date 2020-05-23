import React from 'react';
import "./Navbar.css";
import Grid from '../TWGrid/TWGrid';
import {Link} from "react-router-dom";
function Navbar(){
    return (
        
        <div className ="Navbar">
            <Grid>
            <div className="navlinks py-8 flex">
          <Link className="link" to ="/about">
            <p className ="link w-1/3 px-10">About</p>
            </Link>
            <Link className="link" to="/shop">
            <p className ="link w-1/3 px-10">Shop</p>
            </Link>
            <Link className="link" to="/contact">
            <p className="link w-1/3 px-10">Contact</p>
            </Link>
            </div>
            </Grid>
        </div>
       
    );
};

export default Navbar;

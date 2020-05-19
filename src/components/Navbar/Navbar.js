import React from 'react';
import "./Navbar.css";
import Grid from '../TWGrid/TWGrid';
import {Link} from "react-router-dom";
function Navbar(){
    return (
        
        <div className ="Navbar">
            <Grid>
            <div className="navlinks py-8">
          <Link className="link" to ="/about">
            <a className ="link w-1/3 px-10">About</a>
            </Link>
            <Link className="link" to="/shop">
            <a className ="link w-1/3 px-10">Shop</a>
            </Link>
            <Link className="link" to="/contact">
            <a className="link w-1/3 px-10">Contact</a>
            </Link>
            </div>
            </Grid>
        </div>
       
    );
};

export default Navbar;

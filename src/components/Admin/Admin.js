import React from 'react';
import "./Admin.css";
import AdminTW from './Admin.tw';

function Admin(){
    return(
        <AdminTW>
        <div className="row cards">

            <div className="Upload card w-1/3">
            </div>
            <div className="Messages card w-1/3">
            </div>
            <div className="DirectOrders card w-1/3">
            </div>
        </div>
        </AdminTW>
    );
};

export default Admin;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            
            <NavLink to="/users"><button>Users</button></NavLink>
         <br />Simple crud<hr />
         <Outlet></Outlet>
        </div>
    );
};

export default Root;
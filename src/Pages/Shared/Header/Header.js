import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authentication/AuthProvider';

const Header = () => {
  const {loading,user, logOut} = useContext(AuthContext)
  const handleLogout = () =>{
    logOut()
      .then()
      .catch()
  }
  
    const menubar = <>
    <li>
      <Link className='fw-semibold' to={'/'}>Home</Link>
      <Link className='fw-semibold' to={'/about'}>About Us</Link>
      
      <Link className='fw-semibold' to={'/team'}>Team</Link>
      {
        user?.email ? 
        <>
            <button onClick={ handleLogout} className='btn-ghost'>Logout</button>
        </>
        
        :
        <>
          <Link className='fw-semibold' to={'/login'}>Login</Link>
          <Link className='fw-semibold' to={'/register'}>Register</Link>
        </>
   
      }
    
      </li>
    
    
    </>
   return (
    <div className="navbar h-10 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menubar}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl"></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menubar}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-info">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
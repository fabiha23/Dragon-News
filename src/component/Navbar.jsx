import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='w-1/3'></div>
            <div className='text-accent flex justify-center w-1/3 gap-4 '>
                <NavLink className='font-medium' to='/'>Home</NavLink>
                <NavLink className='font-medium' to='/about'>About</NavLink>
                <NavLink className='font-medium' to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-2 justify-end w-1/3'>
                <img width={34} src={user} alt="" />
                <button className=' bg-primary text-white px-8 py-1 font-medium'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-3'>
            <div className='w-1/3'></div>
            <div className='text-accent flex justify-center w-1/3 gap-6'>
                <NavLink className='font-medium text-lg' to='/'>Home</NavLink>
                <NavLink className='font-medium text-lg' to='/about'>About</NavLink>
                <NavLink className='font-medium text-lg' to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-2 justify-end w-1/3'>
                <img width={34} src={user} alt="" />
                <Link to='/auth/login' className='rounded-sm bg-primary text-white px-8 py-1 font-medium'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
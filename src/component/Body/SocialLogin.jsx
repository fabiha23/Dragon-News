import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-primary font-semibold text-lg mb-4'>Login With</h2>
        <div className='space-y-2'>
            <button className='btn btn-secondary btn-outline border-2 w-full'><FcGoogle size={20}></FcGoogle> Login with Google</button>
            <button className='btn btn-primary btn-outline border-2 w-full'><FaGithub size={20}></FaGithub> Login with Github</button>
        </div>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
                <h2 className='text-primary font-semibold text-xl border-b-1 p-6 mx-6 border-base-300 text-center'>Login your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset px-3">
                        {/* email */}
                        <label className="label font-medium text-sm">Email</label>
                        <input type="email" className="input w-full text-xs" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="label font-medium text-sm">Password</label>
                        <input type="password" className="input w-full text-xs" placeholder="Enter your password" />
                        <div><a className="link link-hover font-medium text-sm text-primary">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-3">Login</button>
                        <p className='pt-4 text-sm text-primary font-medium'>Don’t Have An Account ? <Link to='/auth/register' className='text-secondary hover:underline cursor-pointer'>Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;
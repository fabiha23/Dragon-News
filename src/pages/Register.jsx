import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-2">
                <h2 className='text-primary font-semibold text-xl border-b-1 p-6 mx-6 border-base-300 text-center'>Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset px-3 space-y-1">
                        {/* name */}
                        <label className="label font-medium text-sm">Your Name</label>
                        <input type="text" className="input w-full text-xs" placeholder="Enter you name" />
                        {/* photo */}
                        <label className="label font-medium text-sm">Your Photo</label>
                        <input type="text" className="input w-full text-xs" placeholder="Enter your photo url" />
                        {/* email */}
                        <label className="label font-medium text-sm">Email</label>
                        <input type="email" className="input w-full text-xs" placeholder="Enter your email address" />
                        {/* password */}
                        <label className="label font-medium text-sm">Password</label>
                        <input type="password" className="input w-full text-xs" placeholder="Enter your password" />
                        <div className='flex items-center gap-2 py-2'>
                            <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
                            <p className='text-primary text-sm font-medium'>Accept Terms & Conditions</p>
                        </div>
                        <button className="btn btn-neutral mt-1">Register</button>
                        <p className='pt-2 text-sm text-primary font-medium'>Already Have an Account ? <Link to='/auth/login' className='text-secondary hover:underline cursor-pointer'>Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;
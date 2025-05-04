import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {

    const { registerUser } = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password)
        registerUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-2">
                <h2 className='text-primary font-semibold text-xl border-b-1 p-6 mx-6 border-base-300 text-center'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset px-3 space-y-1">
                        {/* name */}
                        <label className="label font-medium text-sm">Your Name</label>
                        <input name='name' type="text" className="input w-full text-xs" placeholder="Enter you name" required />
                        {/* photo */}
                        <label className="label font-medium text-sm">Your Photo</label>
                        <input name='photo' type="text" className="input w-full text-xs" placeholder="Enter your photo url" required />
                        {/* email */}
                        <label className="label font-medium text-sm">Email</label>
                        <input name='email' type="email" className="input w-full text-xs" placeholder="Enter your email address" required />
                        {/* password */}
                        <label className="label font-medium text-sm">Password</label>
                        <input name='password' type="password" className="input w-full text-xs" placeholder="Enter your password" required />

                        <div className='flex items-center gap-2 py-2'>
                            <input type="checkbox" className="checkbox checkbox-sm rounded-md" />
                            <p className='text-primary text-sm font-medium'>Accept Terms & Conditions</p>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-1">Register</button>
                        <p className='pt-2 text-sm text-primary font-medium'>Already Have an Account ? <Link to='/auth/login' className='text-secondary hover:underline cursor-pointer'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
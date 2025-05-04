import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold text-primary mb-4">Find us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item text-accent bg-white hover:bg-base-200 cursor-pointer justify-start py-6 font-normal gap-3"><FaFacebook size={16}  className='text-blue-600'></FaFacebook> Facebook</button>
                <button className="btn join-item text-accent bg-white hover:bg-base-200 cursor-pointer justify-start py-6 font-normal gap-3"><FaTwitter size={16}  className='text-blue-400'></FaTwitter> Twitter</button>
                <button className="btn join-item text-accent bg-white hover:bg-base-200 cursor-pointer justify-start py-6 font-normal gap-3"><FaInstagram size={16} className='text-rose-600 '></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;
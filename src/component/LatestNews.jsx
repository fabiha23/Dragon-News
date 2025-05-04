import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-200 p-3 rounded-sm flex items-center gap-3'>
            <p className='bg-secondary text-white font-medium px-4 py-2'>Latest</p>
            <Marquee className='space-x-10' pauseOnHover speed={70}>
                <p className='font-semibold text-primary ml-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className='font-semibold text-primary ml-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className='font-semibold text-primary ml-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;
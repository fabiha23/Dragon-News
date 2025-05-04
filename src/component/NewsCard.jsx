import React, { useState } from 'react';
import { FaCheck, FaRegBookmark, FaStar } from 'react-icons/fa';
import { GoShareAndroid } from 'react-icons/go';

const NewsCard = ({ news }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const { title, author, thumbnail_url, details, rating, total_view } = news;
    const formattedDate = new Date(author.published_date).toLocaleString();

    return (
        <div className='border-2 border-base-200 rounded-sm'>
            {/* first div */}
            <div className='bg-base-200 flex items-center justify-between px-5 py-3'>
                <div className='flex items-center gap-2'>
                    <img className='rounded-full w-8' src={author.img} alt="" />
                    <div>
                        <h2 className=' text-primary font-semibold'>{author.name}</h2>
                        <h2 className='text-sm text-accent'>{formattedDate}</h2>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegBookmark size={20} className='text-accent' />
                    <GoShareAndroid size={25} className='text-accent' />
                </div>
            </div>
            {/* second div */}
            <div className='m-5 space-y-5'>
                <h1 className='font-bold text-xl text-primary'>{title}</h1>
                <img className='rounded-md h-70 object-cover w-full ' src={thumbnail_url} alt="" />
                <p className='text-accent font-medium'>
                    {isExpanded || details.length <= 200 ? (
                        details
                    ) : (
                        <>
                            {details.slice(0, 200)}...
                            <span
                                onClick={() => setIsExpanded(true)}
                                className='text-[#FF8C47] font-semibold hover:underline cursor-pointer ml-1'
                            >
                                Read More
                            </span>
                        </>
                    )}
                </p>
            </div>
            {/* third div */}
            <div className='flex items-center justify-between m-5 pt-5 border-t-2 border-base-200'>
                <div className='flex gap-2 text-[#FF8C47]'>{ Array.from({ length: rating.number }, (_, i) => <FaStar key={i}></FaStar>)}</div>
                <h2 className='text-accent font-medium'>{total_view} views</h2>
            </div>
        </div>
    );
};

export default NewsCard;
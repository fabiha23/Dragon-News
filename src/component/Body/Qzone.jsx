import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGroundImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-4 rounded-sm'>
            <h2 className='text-primary font-semibold text-lg mb-4'>Q-Zone</h2>
            <div className='space-y-3'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playGroundImg} alt="" />
            </div>
        </div>

    );
};

export default QZone;
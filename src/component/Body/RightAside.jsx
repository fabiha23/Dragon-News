import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import QZone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-4'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;
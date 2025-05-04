import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';
import LatestNews from '../component/LatestNews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/Body/Leftaside';
import RightAside from '../component/Body/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='max-w-7xl mx-auto mt-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='max-w-7xl mx-auto mt-4'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='max-w-7xl mx-auto mt-8 grid grid-cols-12 gap-4 '>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
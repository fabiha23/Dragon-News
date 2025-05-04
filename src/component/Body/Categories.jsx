import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json')
    .then(res => res.json())

const Categories = () => {

    const categories = use(categoriesPromise)
    return (
        <div>
            <h2 className='text-primary font-semibold text-lg mb-4'>All Categories</h2>
            <div className='grid grid-cols-1 gap-1'>
                {
                    categories.map(category => <NavLink to={`category/${category.id}`} key={category.id} className={({ isActive }) =>
                        `bg-white btn border-0 text-base py-6 shadow-none text-accent hover:bg-base-200 hover:text-primary ${isActive ? 'category-active' : ''
                        }`
                    }
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;
import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/NewsCard';

const categoriesPromise = fetch('/categories.json')
    .then(res => res.json())

const CategoryNews = () => {
    const { id } = useParams();
    const allNews = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    const categories = use(categoriesPromise)
    const currentCategory = categories.find(cat => cat.id == id);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(allNews)
        }
        else if (id == '1') {
            const filteredNews = (allNews.filter(news => news.others.is_today_pick == true))
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = (allNews.filter(news => news.category_id == id))
            setCategoryNews(filteredNews)
        }
    }, [allNews, id])

    return (
        <div>
            <h2 className="text-lg font-semibold text-primary mb-4">
                {currentCategory?.name || 'All News'} ({categoryNews.length} news found)
            </h2>
            <div className='grid grid-cols-1 gap-4'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
import React, { useState, useEffect } from 'react';
import '../../styles/index.scss'
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';
import { PageBtn } from '../../shared/PageBtn/PageBtn';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [discountCard, setDiscountCard] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then((res) => setDiscountCard(res.data));
    }, []);

    return (
        <>
            <AllStores />
            <Link className='linkTo' to={'/shops'}>
                <PageBtn
                    text='Смотреть все'
                    svgId='pageBtn'
                />
            </Link>
            <TopDiscount
                items={discountCard}
            />
            <Link className='linkTo' to={'/shops'}>
                <PageBtn
                    text='Смотреть все'
                    svgId='pageBtn'
                />
            </Link>
        </>
    )
};
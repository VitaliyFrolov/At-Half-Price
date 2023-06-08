import React from 'react';
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';
import { PageBtn } from '../../shared/PageBtn/PageBtn';
// import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <>
            <AllStores />
            <PageBtn text='Смотреть все' />
            <TopDiscount />
            <PageBtn text='Смотреть все' />
        </>
    )
};
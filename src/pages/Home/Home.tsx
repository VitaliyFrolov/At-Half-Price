import React from 'react';
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';
import { PageBtn } from '../../shared/PageBtn/PageBtn';


export const Home = () => {
    return (
        <>
            <AllStores />
            <PageBtn text='Смотреть все' />
            <TopDiscount />
        </>
    )
};
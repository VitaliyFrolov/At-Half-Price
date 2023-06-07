import React from 'react';
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';


export const Home = () => {
    return (
        <>
            <AllStores />
            <TopDiscount />
        </>
    )
};
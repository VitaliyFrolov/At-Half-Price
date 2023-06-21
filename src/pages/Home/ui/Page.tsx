import { FC, useEffect, useState } from 'react';
import { StoresList } from './StoresList';
import { getStores, getDiscounts } from '../lib/dataGetters';
import { IStoreCardProps } from './StoreCard';
import { DiscountsList } from './DiscountsList';
import { IDiscountCardProps } from './DiscountCard';

export const Home: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);

    useEffect(() => {
        getStores().then((response) => setStores(response as IStoreCardProps[]));
        getDiscounts().then((response) => setDiscounts(response as IDiscountCardProps[]));
    }, []);

    return (
        <>
            <StoresList items={stores} />
            <DiscountsList items={discounts} />    
        </>
    )
};
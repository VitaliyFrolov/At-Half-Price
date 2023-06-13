import React from 'react';
// import { AllStoresBtn } from '../AllStoresBtn/AllStoresBtn.module';
import { AllStoresCard } from '../AllStoresCard/AllStoresCard';
import style from './AllStores.module.scss';

interface Item {
    discount: number;
    name: string;
    imgUrl: string;
    id: number;
}

interface Props {
    items: Item[]
}

export const AllStores = ({items}: Props) => {
    const sortedShares = [...items].sort((a, b) => {
        if (a.discount && b.discount) {
            return b.discount - a.discount;
        } else if (a.discount) {
            return -1;
        } else {
            return 1;
        }
    });
    
    return (
        <section className={style.wrapper}>
            <div>
                <h2 className={style.title}>
                    Магазины со скидками в Тель-Авиве
                </h2>
            </div>
            {/* <div className={style.btnWrapper}>
                <AllStoresBtn title='Все магазины' />
                <AllStoresBtn title='Супермаркеты ' />
                <AllStoresBtn title='Магазины Электронники' />
                <AllStoresBtn title='Детские магазины' />
                <AllStoresBtn title='Косметика' />
                <AllStoresBtn title='Алкогольные магазины' />
                <AllStoresBtn title='Товары для дома' />
                <AllStoresBtn title='Зоотовары' />
            </div> */}
            <div className={style.cardWrapper}>
                {sortedShares.map((item: Item) => (
                    <AllStoresCard
                        discount={item.discount}
                        name={item.name}
                        imgUrl={item.imgUrl}
                        key={item.id}
                    />
                ))}
            </div>
        </section>
    )
};
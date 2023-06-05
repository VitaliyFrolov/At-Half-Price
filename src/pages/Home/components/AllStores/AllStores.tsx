import React from 'react';
import { AllStoresBtn } from '../AllStoresBtn/AllStoresBtn.module';
import { AllStoresCard } from '../AllStoresCard/AllStoresCard';
import style from './AllStores.module.scss';

export const AllStores = () => {
    return (
        <section className={style.wrapper}>
            <div>
                <h2 className={style.title}>
                    Магазины со скидками в Тель-Авиве
                </h2>
            </div>
            <div className={style.btnWrapper}>
                <AllStoresBtn title='Все магазины' />
                <AllStoresBtn title='Супермаркеты ' />
                <AllStoresBtn title='Магазины Электронники' />
                <AllStoresBtn title='Детские магазины' />
                <AllStoresBtn title='Косметика' />
                <AllStoresBtn title='Алкогольные магазины' />
                <AllStoresBtn title='Товары для дома' />
                <AllStoresBtn title='Зоотовары' />
            </div>
            <div className={style.cardWrapper}>
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
                <AllStoresCard />
            </div>
        </section>
    )
};
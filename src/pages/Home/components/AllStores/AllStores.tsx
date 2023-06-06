import React from 'react';
import { PageBtn } from '../../../../shared/PageBtn/PageBtn';
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
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 1' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 2' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 3' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 4' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 5' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 6' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 7' />
                <AllStoresCard imgUrl='../img/BannerTestImg.png' discount='2396 Акций' name='Магазин 8' />
            </div>
            <PageBtn text='Смотреть все' />
        </section>
    )
};
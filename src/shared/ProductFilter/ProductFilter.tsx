import React from "react";
import style from './ProductFilter.module.scss'
import { ProductFilterBtn } from "../ProductFilterBtn/ProductFilterBtn";

export const ProductFilter = () => {
    return (
        <div className={style.wrapper}>
            <ProductFilterBtn title='Все магазины' />
            <ProductFilterBtn title='Супермаркеты ' />
            <ProductFilterBtn title='Магазины Электронники' />
            <ProductFilterBtn title='Детские магазины' />
            <ProductFilterBtn title='Косметика' />
            <ProductFilterBtn title='Алкогольные магазины' />
            <ProductFilterBtn title='Товары для дома' />
            <ProductFilterBtn title='Зоотовары' />
        </div>
    )
};
import React from "react";
import { TopDiscountCard } from "../TopDiscountCard/TopDiscountCard";
import style from './TopDiscount.module.scss';

// interface Props {

// }

export const TopDiscount = () => {
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                Самые выгодные скидки сейчас
            </h2>
            <div className={style.content}>
               <TopDiscountCard price={10} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={13} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={14} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={11} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={12} product={'продукт'} shop={'магазин'} discount={15} />
               <TopDiscountCard price={33} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={11} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={10} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={14} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={15} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={11} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={44} product={'продукт'} shop={'магазин'} discount={10} /> 
            </div>
        </section>
    )
};
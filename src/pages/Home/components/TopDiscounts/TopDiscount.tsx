import React from "react";
import { TopDiscountCard } from "../TopDiscountCard/TopDiscountCard";
import style from './TopDiscount.module.scss';

interface Props {

}

export const TopDiscount = () => {
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                Самые выгодные скидки сейчас
            </h2>
            <div className={style.content}>
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10}/>
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} />
               <TopDiscountCard price={100} product={'продукт'} shop={'магазин'} discount={10} /> 
            </div>
        </section>
    )
};
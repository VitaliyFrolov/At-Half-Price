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
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} />
               <TopDiscountCard price={17} sale={25} product={'продукт'} shop={'магазин'} /> 
            </div>
        </section>
    )
};
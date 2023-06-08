import React from "react";
import { TopDiscountCard } from "../TopDiscountCard/TopDiscountCard";
import style from './TopDiscount.module.scss';

interface Props {
    items: any
}

export const TopDiscount = ({items}: Props) => {
    console.log(items)
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                Самые выгодные скидки сейчас
            </h2>
            <div className={style.content}>
                {items.map((item: any) => (
                    <TopDiscountCard 
                        price={item.price}
                        product={item.product}
                        shop={item.shop}
                        discount={item.discount}
                    />
                ))}
            </div>
        </section>
    )
};
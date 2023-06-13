import React from "react";
import { TopDiscountCard } from "../TopDiscountCard/TopDiscountCard";
import style from './TopDiscount.module.scss';

interface Item {
    price: number;
    product: string;
    shop: string;
    discount?: number;
    id: number;
}

interface Props {
    items: Item[]
}

export const TopDiscount = ({items}: Props) => {
    return (
        <section className={style.container}>
            <h2 className={style.title}>
                Самые выгодные скидки сейчас
            </h2>
            <div className={style.content}>
                {items.map((item: Item) => (
                    <TopDiscountCard 
                        price={item.price}
                        product={item.product}
                        shop={item.shop}
                        discount={item.discount}
                        key={item.id}
                    />
                ))}
            </div>
        </section>
    )
};
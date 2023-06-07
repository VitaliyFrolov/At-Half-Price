import React from "react";
import style from './TopDiscountCard.module.scss';

export const TopDiscountCard = () => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="/img/BannerTestImg.png" width={31} height={18} alt='sale' />
            </div>
            <div className={style.content}>
                <div className={style.price}>
                    19$
                </div>
                <p className={style.product}>
                    продукт
                </p>
                <p className={style.shop}>
                    магазин
                </p>
            </div>
        </div>
    )
}
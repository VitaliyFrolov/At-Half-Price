import React from "react";
import style from './TopDiscountCard.module.scss';

interface Props {
    price: number
    product: string
    shop: string
    discount: number
}

const discountCalc = (price: number, discount: number) => {
    const percent = price * discount / 100;
    const sale = price - percent;
    return sale
};


export const TopDiscountCard = ({price, product, shop, discount}: Props) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="/img/BannerTestImg.png" width={31} height={18} alt='sale' />
            </div>
            <div className={style.content}>
                <div className={style.priceContainer}>
                    <div className={style.price}>
                        <span className={style.priceNum}>
                            {discountCalc(price, discount)}
                        </span>
                        <span className={style.priceСurrency}>
                            NIS
                        </span> 
                    </div>
                    <div className={style.sale}>
                        <span className={style.saleNum}>
                            <s>
                                {price}
                            </s>
                        </span>
                        <span className={style.saleCurrency}>
                            <s>
                                NIS
                            </s>
                        </span>
                    </div>
                </div>
                <p className={style.product}>
                    {product}
                </p>
                <p className={style.shop}>
                    {shop}  
                </p>
            </div>
        </div>
    )
}
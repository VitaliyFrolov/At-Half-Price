import React from "react";
import style from './TopDiscountCard.module.scss';

interface Props {
    price: number;
    product: string;
    shop: string;
    discount?: number;
};

const calcDiscount = (price: number, discount?: number): number => {
   if (discount) {
    const percent = price * discount / 100;
    const sale = price - percent;
    return sale;
   } else {
    return price
   }
};




export const TopDiscountCard = ({price, product, shop, discount}: Props) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="/img/BannerTestImg.png" width={31} height={18} alt='sale' />
                {discount ? 
                    <div className={style.saleBar}>
                        <span>
                            <p className={style.saleBarText}>
                                -{discount}%
                            </p>
                        </span>
                    </div> : null
                }
            </div>
            <div className={style.content}>
                <div className={style.priceContainer}>
                    <div className={style.price}>
                        <span className={style.priceNum}>
                            {calcDiscount(price, discount)}
                        </span>
                        <span className={style.priceСurrency}>
                            NIS
                        </span> 
                    </div>
                    {discount ?
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
                    </div> : null
                    }
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
};
import React from "react";
import style from './TopDiscountCard.module.scss';

interface Props {
    price: number
    sale: number
    product: string
    shop: string
}

export const TopDiscountCard = ({price, sale, product, shop}: Props) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="/img/BannerTestImg.png" width={31} height={18} alt='sale' />
            </div>
            <div className={style.content}>
                <div className={style.priceContainer}>
                    <div className={style.price}>
                        <span className={style.priceNum}>
                            {price}
                        </span>
                        <span className={style.priceСurrency}>
                            NIS
                        </span> 
                    </div>
                    <div className={style.sale}>
                        <span className={style.saleNum}>
                            <s>
                                {sale}
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
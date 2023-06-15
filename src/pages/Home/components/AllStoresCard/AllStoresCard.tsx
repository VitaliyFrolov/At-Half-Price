import React from "react";
import style from './AllStoresCard.module.scss';

interface Props {
    discount: number
    name: string
    imgUrl: string
}

export const AllStoresCard = ({discount, name, imgUrl}: Props) => {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={imgUrl} width={31} height={18} alt="Store logotype" />
            </div>
            <div className={style.contentContainer}>
                <div className={style.content}>
                    <h3 className={style.discount}>
                        {discount} Акций
                    </h3>
                    <p className={style.name}>
                        {name}
                    </p>
                </div>
            </div>
        </div>
    )

};
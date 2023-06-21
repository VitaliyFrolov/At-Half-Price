import React from "react";
import style from './ProductFilterBtn.module.scss';

interface Props {
    title: string
};

export const ProductFilterBtn = ({title}: Props) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>
                {title}
            </h2>
        </div>
    )
};
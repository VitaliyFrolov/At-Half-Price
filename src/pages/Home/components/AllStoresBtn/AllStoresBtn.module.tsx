import React from "react";
import style from './AllStoresBtn.module.scss';

interface Props {
    title: string
};

export const AllStoresBtn = ({title}: Props) =>  {
    return (
        <div className={style.container}>
            <h2 className={style.title}>
                {title}
            </h2>
        </div>
    )
};
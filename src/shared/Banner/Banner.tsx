import React from "react";
import style from './Banner.module.scss';

interface Props {}

export const Banner = (props: Props) => {
    return (
        <section className={style.bannerWrapper}>
            <div className={style.banner}>
                <div className={style.bannerImg} />
                <p className={style.text}>Рекламный банер</p>
            </div>
        </section>
    )
}
import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.column}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <h2 className={style.title}>
                                Помощь 
                            </h2>
                        </li>
                        <li className={style.item}>
                            <p className={style.text}>
                                Инструкции и советы 
                            </p>
                        </li>
                        <li className={style.item}>    
                            <p className={style.text}>
                                Написать в поддержку
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={style.column}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <h2 className={style.title}>
                                Партнерство
                            </h2>
                        </li>
                        <li className={style.item}>
                            <p className={style.text}>
                                Наш проект для бизнеса
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={style.column}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <h2 className={style.title}>
                                Наш проект в соцсетях
                            </h2>
                        </li>
                        <li className={style.item}>
                            <p className={style.text}>
                                INSTAGRAM
                            </p>
                        </li>
                        <li className={style.item}>    
                            <p className={style.text}>
                                FACEBOOK
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};
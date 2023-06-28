import React from 'react';
import style from './Footer.module.scss';
import { Container } from '../../Container';

export const Footer = () => {
    return (
        <footer className={style.container}>
            <Container>
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
            </Container>
        </footer>
    )
};
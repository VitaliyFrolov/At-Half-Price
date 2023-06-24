import React from "react";
import style from "./Header.module.scss"
import { SvgTools } from "svgTools/SvgTools";
import { Link } from "react-router-dom";


interface Props {}

export const Header = (props: Props) => {
    return (
        <div className={style.shadow}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.leftWrapper}>
                        <div className={style.logo}>
                            <SvgTools id="logo" />
                        </div>
                        <nav>
                            <ul className={style.list}>
                                <li className={style.item}>
                                    <SvgTools id="location" />
                                    <p className={style.text}>
                                        Тель Авив 
                                    </p>
                                </li>
                                <li className={style.item}>
                                    <p className={style.text}>
                                        Скидки 
                                    </p>
                                </li>
                                <li className={style.item}>
                                    <p className={style.text}>
                                        Купоны 
                                    </p>
                                </li>
                                <li className={style.item}>
                                    <Link 
                                        className={style.link}
                                        to={'./shops'}>
                                        <p className={style.text}>
                                            Магазины 
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.rightWrapper}>
                        <div className={style.input}>
                            input
                        </div>
                        <div className={style.user} />
                    </div>
                </div>
            </div>
        </div>
    )
};
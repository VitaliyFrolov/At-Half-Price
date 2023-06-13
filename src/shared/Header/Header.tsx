import React from "react";
import style from "./Header.module.scss"
import { SvgTools } from "../../svgTools/SvgTools";
import { Link } from "react-router-dom";


interface Props {}

export const Header = (props: Props) => {
    return (
        <div className={style.shadow}>
            <div className={style.header__wrapper}>
                <header className={style.header}>
                    <div className={style.header__leftContainer}>
                        <div className={style.header__logo}>
                            <SvgTools id="logo"/>
                        </div>
                        <ul className={style.header__menu}>
                            <li className={style.header__item}>
                                <SvgTools id='location' />
                                <p className={style.header__itemText}>Тель Авив </p>
                            </li> 
                            <li className={style.header__item}>
                                <p className={style.header__itemText}>Скидки</p>
                            </li>
                            <li className={style.header__item}>
                                <p className={style.header__itemText}>Купоны</p>
                            </li>
                            <li className={style.header__item}>
                                <Link to={'/shops'} className={style.header__itemText}>Магазины </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.header__rightContainer}>
                        <div className={style.header__search}>
                            <button className={style.header__searchBtn}>
                                <SvgTools id="search" />
                            </button>
                            <input 
                                className={style.header__searchInpt}
                                type="text"
                                placeholder="Поиск акций и магазинов"
                            />
                        </div>
                        <div className={style.header__userMenu} />
                    </div>
                </header>
            </div>
        </div>
    )
};
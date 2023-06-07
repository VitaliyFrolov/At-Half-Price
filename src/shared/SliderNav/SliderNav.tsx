import React from "react";
import { SvgTools } from "../../svgTools/SvgTools";
import style from './SliderNav.module.scss';

export const SliderNav = () => {
    return (
        <div className={style.container}>
            <ul className={style.list}>
                <li className={style.itemSwitch}>
                    <span>
                        1
                    </span>
                </li>
                <li className={style.item}>
                    <span>
                        2
                    </span>
                </li>
                <li className={style.item}>
                    <span>
                        3
                    </span>
                </li>
                <li className={style.item}>
                    <span>
                        4
                    </span>
                </li>
                <li className={style.item}>
                    <span>
                        ...
                    </span>
                </li>
                <li className={style.item}>
                    <span>
                        10
                    </span>
                </li>
                <li className={style.itemSwitch}>
                    <span>
                        <SvgTools id="NextBtn" />
                    </span>
                </li>
            </ul>
        </div>      
    )
};
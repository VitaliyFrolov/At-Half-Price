import React from "react";
import { SvgTools } from "../svgTools/SvgTools";
import style from './Btn.module.scss';
import { Link } from "react-router-dom";

interface Props {
    text: string
    svgId?: string
}

export const Btn = ({text, svgId}: Props) => {
    return (
        <div className={style.btn}>
            <Link className={style.linkTo} to={'/shops'}>
                <p className={style.text}>
                    {text}
                </p>
                {svgId ? 
                    <SvgTools
                        id={svgId}
                    /> : null
                }
            </Link>
        </div>
    )
};
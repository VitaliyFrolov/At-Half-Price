import React from "react";
import { SvgTools } from "../../svgTools/SvgTools";
import style from './PageBtn.module.scss';
import { Link } from "react-router-dom";

interface Props {
    text: string
    svgId?: string
}

export const PageBtn = ({text, svgId}: Props) => {
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
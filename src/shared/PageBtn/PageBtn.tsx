import React from "react";
import { SvgTools } from "../../svgTools/SvgTools";
import style from './PageBtn.module.scss';

interface Props {
    text: string
}

export const PageBtn = ({text}: Props) => {
    return (
        <div className={style.btn}>
            <p className={style.text}>
                {text}
            </p>
            <SvgTools id="pageBtn" />
        </div>
    )
};
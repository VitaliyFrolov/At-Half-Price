import React from "react";
import { SvgTools } from "../../svgTools/SvgTools";
import style from './PageBtn.module.scss';

interface Props {
    text: string
    svgId?: string
}

export const PageBtn = ({text, svgId}: Props) => {
    return (
        <div className={style.btn}>
            <p className={style.text}>
                {text}
            </p>
            {svgId 
                ? <SvgTools id={svgId} /> 
                : null}
            
        </div>
    )
};
import React from "react";
import styles from './Title.module.scss';

interface Props {
    text: string;
};

export const Title = ({text}: Props) => {
    return (
        <h2 className={styles.title}>
            {text}
        </h2>
    )
};
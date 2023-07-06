import { FC } from 'react';
import styles from './FilterButton.module.scss'

interface IFilterButtonProps {
    title: string;
    onClick?: () => void;
};

export const FilterButton:FC<IFilterButtonProps>  = ({title, onClick}) => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    )
};
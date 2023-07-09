import React from 'react';
import cn from 'classnames'
import styles from './Search.module.scss';

interface Props {
    placeholder?:string;
    className?: string;
}

export const Search = ({placeholder, className}: Props) => {
    return (
        <input
            type='text' 
            placeholder={placeholder}
            className={cn([className, styles.searchInput])}
        />
    )
};
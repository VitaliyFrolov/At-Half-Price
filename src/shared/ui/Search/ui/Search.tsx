import React from 'react';
// import img
import styles from './Search.module.scss';

interface Props {
    placeholder?:string;
    button?: boolean;
}

export const Search = ({placeholder, button}: Props) => {
    return (
        <form className={styles.inputForm} action='' method='get'>
            {/* img */}
            <input
                type='text' 
                placeholder={placeholder}
                className={styles.input}
            />
            {button ? 
                <button className={styles.btn} type='submit'>
                    Поиск
                </button>
            : null 
            }
        </form>
    )
};
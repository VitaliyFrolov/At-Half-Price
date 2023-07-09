import { FC } from 'react'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
    text?: string,
    onClick?: () => void
}

export const Checkbox: FC<ICheckboxProps> = ({ text, onClick }) => {
    return (
        <label className={styles.label}>
            <input
                type='checkbox'
                className={styles.checkbox}
                onClick={onClick}
            />
            <span
                className={styles.fakeCheckbox}
            />
            <span>
                {text}
            </span>
        </label>
    )
} 
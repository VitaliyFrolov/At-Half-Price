import { FC } from 'react'
import styles from './Checkbox.module.scss'

interface ICheckboxProps {
    label?: string,
    onClick?: () => void
}

export const Checkbox: FC<ICheckboxProps> = ({ label, onClick }) => {
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
                {label}
            </span>
        </label>
    )
} 
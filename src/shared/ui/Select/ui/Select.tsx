import { FC, useState, useRef, useEffect } from 'react';
import styles from './Select.module.scss';

interface ISelectProprs {
    selected: Option | null;
    options: Option[];
    placeholder?: string;
    mode?: 'rows' | 'cells';
    onChange?: () => void;
    onClose?: () => void;
}

type Option = {
    title: string,
    value: string
}

export const Select: FC<ISelectProprs> = ({selected, options, placeholder, mode, onChange, onClose}) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const {target} = event;

            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, [isOpen, onClose]);

    return (
        <div 
            className={styles.selectWrapper}
            ref={rootRef}
            data-is-actice={isOpen}
            data-mode={mode}
        >
            залупа
        </div>
    )
}
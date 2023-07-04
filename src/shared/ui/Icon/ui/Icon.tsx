import { FC } from 'react';
import cn from 'classnames';
import { IconID } from '../lib/Const';
import styles from './Icon.module.scss';

export interface IIconProps {
    className?: string;
    id: IconID;
    size?: 'm' | 'l' | 's';
}

export const Icon: FC<IIconProps> = (props) => {
    const {
        id,
        size = 'm',
        className
    } = props;

    return (
        <svg className={cn(styles.icon, className, styles[`size-${size}`])}>
            <use xlinkHref={`#${id}`} />
        </svg>
    );

    switch (id) {
        case 'logo':
            return (
                <p>logo</p>
            );
        case 'location':
            return (
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 6.65C4.07376 6.65 3.66498 6.46563 3.36358 6.13744C3.06218 5.80925 2.89286 5.36413 2.89286 4.9C2.89286 4.43587 3.06218 3.99075 3.36358 3.66256C3.66498 3.33437 4.07376 3.15 4.5 3.15C4.92624 3.15 5.33502 3.33437 5.63642 3.66256C5.93782 3.99075 6.10714 4.43587 6.10714 4.9C6.10714 5.12981 6.06557 5.35738 5.98481 5.5697C5.90404 5.78202 5.78566 5.97493 5.63642 6.13744C5.48718 6.29994 5.31001 6.42884 5.11503 6.51679C4.92004 6.60473 4.71105 6.65 4.5 6.65ZM4.5 0C3.30653 0 2.16193 0.516248 1.31802 1.43518C0.474106 2.3541 0 3.60044 0 4.9C0 8.575 4.5 14 4.5 14C4.5 14 9 8.575 9 4.9C9 3.60044 8.52589 2.3541 7.68198 1.43518C6.83807 0.516248 5.69347 0 4.5 0Z" fill="#686B6F"/>
                </svg>
            );
        case 'search':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81429 0.666016C8.48894 0.666016 10.095 1.33127 11.2792 2.51543C12.4633 3.69959 13.1286 5.30565 13.1286 6.9803C13.1286 8.5443 12.5554 9.98202 11.6131 11.0894L11.8754 11.3517H12.6429L17.5 16.2089L16.0429 17.666L11.1857 12.8089V12.0414L10.9234 11.7792C9.816 12.7214 8.37829 13.2946 6.81429 13.2946C5.13963 13.2946 3.53357 12.6293 2.34941 11.4452C1.16525 10.261 0.5 8.65495 0.5 6.9803C0.5 5.30565 1.16525 3.69959 2.34941 2.51543C3.53357 1.33127 5.13963 0.666016 6.81429 0.666016ZM6.81429 2.60887C4.38571 2.60887 2.44286 4.55173 2.44286 6.9803C2.44286 9.40887 4.38571 11.3517 6.81429 11.3517C9.24286 11.3517 11.1857 9.40887 11.1857 6.9803C11.1857 4.55173 9.24286 2.60887 6.81429 2.60887Z" fill="#686B6F"/>
                </svg>
            );
        case 'pointer':
            return (
                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.371428 16.7833L2.57143 19L12 9.5L2.57143 0L0.371428 2.21667L7.6 9.5L0.371428 16.7833Z" fill="#878787"/>
                </svg>
            );
        case 'angle':
            return (
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.657143 9.71667L1.85714 11L7 5.5L1.85714 0L0.657143 1.28333L4.6 5.5L0.657143 9.71667Z" fill="#878787"/>
                </svg>
            );    
        default:
            return null;
    }   
};

import { FC } from "react";
import cn from 'classnames';
import styles from './Title.module.scss';

export interface ITitleProps {
    className?: string;
    children: string;
    size?: 'm' | 'l' | 's';
    tag?: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Title: FC<ITitleProps> = (props) => {
    const {
        className,
        children,
        size = 'm',
        tag: Tag = 'h2'
    } = props;

    return (
        <Tag className={cn([styles.title, className, styles[`size-${size}`]])}>
            {children}
        </Tag>
    );
};

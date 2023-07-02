import { FC } from 'react';
import cn from 'classnames';
import { Icon, IIconProps } from "shared/ui/Icon";
import styles from './Button.module.scss';

export enum ButtonTheme {
    Filled = 'filled',
    Outlined = 'outlined',
    Default = Filled
}

interface IButtonProps {
    className?: string;
    icon?: IIconProps['id'];
    onClick?: () => void;
    children?: string;
    iconPosition?: 'left' | 'right';
    theme?: ButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        icon,
        children,
        onClick,
        iconPosition = 'left',
        theme = ButtonTheme.Filled
    } = props;

    return (
       <button className={cn([styles.button, className, styles[`theme-${theme}`]])} onClick={onClick}>
            {icon && (
                <Icon
                    className={cn([styles.icon, styles[`iconPosition-${iconPosition}`]])}
                    id={icon}
                />
            )}
            <span className={styles.caption}>
                {children}
            </span>
       </button>
    );
};

import { ChangeEvent, FC, MouseEvent, MouseEventHandler, useState } from 'react';
import cn from 'classnames';
import { Icon, IIconProps } from 'shared/ui/Icon';
import styles from './Input.module.scss';

export enum InputTheme {
  Outlined = 'outlined',
  Default = Outlined,
}

export interface IInputProps {
  className?: string;
  iconId?: IIconProps['id'];
  iconSize?: IIconProps['size'];
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  theme?: InputTheme;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  value?: string;
  focus?: boolean;
}

export const Input: FC<IInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    className,
    iconPosition = 'left',
    theme = InputTheme.Default,
    iconSize = 'm',
    iconId,
    value = '',
    placeholder = '',
    onChange,
    onClick,
    disabled = false,
    focus = false
  } = props;

  return (
    <div className={cn([styles.input, styles[`theme-${theme}`], className], { [styles.focused]: focused} )}>
      {iconId && (
        <Icon
          className={cn([styles.icon, styles[`iconPosition-${iconPosition}`]])}
          id={iconId}
          size={iconSize}
        />
      )}
      <input
        className={styles.nativeInput}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoFocus={focus}
        disabled={disabled}
      />
    </div>
  )
};

import { FC, CSSProperties, PropsWithChildren } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import styles from './Popup.module.scss';

interface IPopupProps extends PropsWithChildren {
  top?: number | string;
  left?: number | string;
  className?: string;
  style?: CSSProperties;
}

export const Popup: FC<IPopupProps> = (props) => {
  const {
    top = 0,
    left = 0,
    children,
    style,
    className
  } = props;

  const layout = (
    <div
      className={cn([styles.popup, className])} 
      style={{ ...style, top, left }}
    >
      {children}
    </div>
  );

  return createPortal(layout, document.querySelector('#root') as Element);
}
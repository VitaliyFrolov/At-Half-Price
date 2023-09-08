import { createPortal } from 'react-dom';
import cn from 'classnames';
import styles from './Modal.module.scss';
import { PropsWithChildren } from 'react';

export const enum OverlayTheme {
  Dark = 'dark',
  Default = Dark
}

export interface IModalProps extends PropsWithChildren {
  overlayTheme?: OverlayTheme;
}

export const Modal = (props: IModalProps) => {
  const {
    overlayTheme = OverlayTheme.Default,
    children
  } = props;

  const layout = (
   <div className={styles.modal}>
    <div className={cn([styles.overlay, styles[`overlay-${overlayTheme}`]])} />
    <div className={styles.window}>
      {children}
    </div>
   </div>
  );

  return createPortal(layout, document.querySelector('#root') as Element)
};

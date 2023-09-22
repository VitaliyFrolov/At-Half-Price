import { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

export interface ICardProps extends PropsWithChildren {
  className?: string;
  imgHeight?: number;
  imgUrl?: string;
  imgAlt?: string;
  imgOverlay?: ReactNode;
  objectFit?: 'contain' | 'cover';
}

export const Card: FC<ICardProps> = (props) => {
  const {
    imgUrl,
    imgAlt,
    imgHeight = 300,
    imgOverlay,
    objectFit = 'cover',
    children,
    className
  } = props; 
  return (
    <div className={cn([styles.card, className])}>
      <div className={styles.imgWrapper}>
        <img
            className={cn([styles.img, styles[`img-${objectFit}`]])}
            src={imgUrl}
            alt={imgAlt}
            height={imgHeight}
        />
        {imgOverlay && (
          <div className={styles.imgOverlay}>{imgOverlay}</div>
        )}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
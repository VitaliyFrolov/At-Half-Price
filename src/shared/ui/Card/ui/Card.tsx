import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

export interface ICardProps extends PropsWithChildren {
  className?: string;
  imgHeight?: number;
  imgUrl?: string;
  imgAlt?: string;
}

export const Card: FC<ICardProps> = (props) => {
  const {
    imgUrl,
    imgAlt,
    imgHeight = 300,
    children,
    className
  } = props; 
  return (
    <div className={cn([styles.card, className])}>
      <img
        className={styles.img}
        src={imgUrl}
        alt={imgAlt}
        height={imgHeight}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './ListCard.module.scss';

export interface IListCardProps extends PropsWithChildren {
  className?: string;
  imgUrl?: string;
  imgAlt?: string;
}

export const ListCard: FC<IListCardProps> = (props) => {
  const { imgUrl, imgAlt, children, className } = props; 
  return (
    <div className={cn([styles.card, className])}>
      <img
        src={imgUrl}
        alt={imgAlt}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
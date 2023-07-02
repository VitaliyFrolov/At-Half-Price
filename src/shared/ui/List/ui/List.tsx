import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import cn from 'classnames';
import styles from './List.module.scss';

export interface ICardsListProps  extends PropsWithChildren {
  className?: string;
  children: ReactNode[];
}

export const List: FC<ICardsListProps> = (props) => {
  const {
    children,
    className
  } = props;

  const content = useMemo(() => children.map((child) => (
    <li className={styles.listItem}>
      {child}
    </li>
  )), [children]);

  return (
    <ul className={cn([styles.list, className])}>
      {content}
    </ul>
  );
}

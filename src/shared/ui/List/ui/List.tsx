import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import styles from './List.module.scss';

export interface ICardsListProps  extends PropsWithChildren {
  children: ReactNode[];
}

export const List: FC<ICardsListProps> = (props) => {
  const { children } = props;

  const content = useMemo(() => children.map((child) => (
    <li className={styles.listItem}>
      {child}
    </li>
  )), [children]);

  return (
    <ul className={styles.list}>
      {content}
    </ul>
  );
}

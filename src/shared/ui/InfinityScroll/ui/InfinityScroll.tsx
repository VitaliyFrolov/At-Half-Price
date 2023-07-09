import { FC, ReactNode, useMemo, useState } from 'react';
import styles from './InfinityScroll.module.scss';

export interface IInfinityScrollProps {
  limit?: number;
  itemsData: unknown[];
  onScrollEnd?: () => void;
  itemRender: (data: unknown) => ReactNode;
}

export const InfinityScroll: FC<IInfinityScrollProps> = (props) => {
  const [loading, setLoading] = useState();
  const {
    limit,
    onScrollEnd,
    itemsData,
    itemRender
  } = props;

  const renderedItems = useMemo(() => itemsData.map(itemRender), [itemsData, itemRender]);

  return (
    <div className={styles.scrollContainer}>
      {renderedItems}
    </div>
  );
};

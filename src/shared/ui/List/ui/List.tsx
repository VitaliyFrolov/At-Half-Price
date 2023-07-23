import { ReactNode, useCallback, useMemo, useRef } from 'react';
import cn from 'classnames';
import styles from './List.module.scss';

interface IItemId {
  id: number | string;
}

export interface IListProps<D> {
  className?: string;
  isLoading?: boolean;
  hasMore?: boolean;
  data: D[];
  itemContentRender: (data: D) => ReactNode;
  onScrollEnd?: () => void;
}

export const List = <D extends IItemId>(props: IListProps<D>) => {
  const {
    className,
    data = [],
    itemContentRender,
    isLoading,
    hasMore,
    onScrollEnd
  } = props;
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback((node: HTMLLIElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting && onScrollEnd && hasMore) {
        onScrollEnd();
        console.log('last element is visible')
      }
    })
    if (node) {
      observer.current.observe(node)
    }
  }, [hasMore, isLoading, onScrollEnd])

  const content = useMemo(() => data.map((itemData, index) => {
    if (data.length === index + 1) {
      return (
        <li
          className={styles.listItem}
          key={itemData.id}
          ref={lastElementRef}>
            {itemContentRender(itemData)}
        </li>
      );
    }
    return (
      <li className={styles.listItem} key={itemData.id}>
        {itemContentRender(itemData)}
      </li>
    );
  }), [data, itemContentRender, lastElementRef]);

  return (
    <ul className={cn([styles.list, className])}>
      {content}
    </ul>
  );
};

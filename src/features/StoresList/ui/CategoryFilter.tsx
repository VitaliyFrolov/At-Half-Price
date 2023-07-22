import { FC } from 'react';
import cn from 'classnames';
import styles from './CategoryFilter.module.scss';

interface IFilterItem {
  caption: string;
  id: string;
}

interface ICategoryFilterProps {
  className?: string;
  onChange: (filterId: string) => void;
  items: IFilterItem[];
}

export const CategoryFilter: FC<ICategoryFilterProps> = (props) => {
  const {
    className,
    onChange,
    items
  } = props;

  const filterItems = items.map((item) => (
    <li className={styles.categoryItem} key={item.id}>
      <button className={styles.categoryButton} onClick={() => onChange(item.id)}>
        <span
          className={cn([styles.categoryName, 'truncate'])}
          title={item.caption}
        >
          {item.caption}
        </span>
      </button>
    </li>
  ));

  return (
    <ul className={cn([styles.categoryFilter, className])}>
      {filterItems}
    </ul>
  );
}
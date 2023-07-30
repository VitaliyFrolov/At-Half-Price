import { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import styles from './CategoryFilter.module.scss';

interface IFilterItem {
  caption: string;
  id: string;
}

interface ICategoryFilterProps {
  className?: string;
  onChange: (filterId: string) => void;
  items?: IFilterItem[];
  value?: IFilterItem['id'];
}

export const CategoryFilter: FC<ICategoryFilterProps> = (props) => {
  const {
    className,
    onChange,
    items,
    value
  } = props;
  const [active, setActive] = useState(value);

  const onChangeWrapper = useCallback((id: IFilterItem['id']) => {
    setActive(id);
    onChange(id);
  }, [onChange]);

  const filterItems = items?.map((item) => (
    <li className={styles.categoryItem} key={item.id}>
      <button
        className={cn([styles.categoryButton], { [styles.active]: active === item.id })}
        onClick={() => onChangeWrapper(item.id)}
      >
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
import { FC, useMemo } from 'react';
import { StoreCard, IStoreCardProps } from './StoreCard';
import styles from './StoresList.module.scss';

interface IStoresListProps {
    items: IStoreCardProps[];
}

export const StoresList: FC<IStoresListProps> = (props) => {
    const { items } = props;

    const storesCards = useMemo(() => items.map((item) => (
        <li className={styles.listItem}>
            <StoreCard
                key={item.name}
                name={item.name}
                discountsCount={item.discountsCount}
                imgUrl={item.imgUrl}
            />
        </li>
    )), [items]);

    return (
        <ul className={styles.list}>
            {storesCards}
        </ul>
    );
};

import { FC } from 'react';
import { IListCardProps, ListCard } from 'shared/ui/ListCard';
import styles from './StoreCard.module.scss';

export interface IStoreCardProps extends IListCardProps {
    discountsCount: number;
    name: string;
}

export const StoreCard: FC<IStoreCardProps> = (props) => {
    const { discountsCount, name, imgUrl, className } = props

    return (
        <ListCard imgUrl={imgUrl} imgAlt={name} className={className}>
            <h3 className={styles.discountsCount}>
                {discountsCount} Акций
            </h3>
            <p className={styles.name}>
                {name}
            </p>
        </ListCard>
    );
};

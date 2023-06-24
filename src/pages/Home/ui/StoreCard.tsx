import { FC } from 'react';
import { ICardProps, Card } from 'shared/ui/Card';
import styles from './StoreCard.module.scss';

export interface IStoreCardProps extends ICardProps {
    discountsCount: number;
    name: string;
}

export const StoreCard: FC<IStoreCardProps> = (props) => {
    const { discountsCount, name, imgUrl, className } = props

    return (
        <Card imgUrl={imgUrl} imgAlt={name} className={className}>
            <h3 className={styles.discountsCount}>
                {discountsCount} Акций
            </h3>
            <p className={styles.name}>
                {name}
            </p>
        </Card>
    );
};

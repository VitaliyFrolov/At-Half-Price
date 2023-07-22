import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICardProps, Card } from 'shared/ui/Card';
import styles from './StoreCard.module.scss';

export interface IStoreCardProps extends ICardProps {
    discountsCount: number;
    name: string;
    url?: string;
}

export const StoreCard: FC<IStoreCardProps> = (props) => {
    const { discountsCount, name, imgUrl, url, className } = props

    return (
        <Link to={`${url}`} className={styles.link}>
            <Card imgUrl={imgUrl} imgAlt={name} className={className}>
                <h3 className={styles.discountsCount}>
                    {discountsCount} Акций
                </h3>
                <p className={styles.name}>
                    {name}
                </p>
            </Card>
        </Link>
    );
};

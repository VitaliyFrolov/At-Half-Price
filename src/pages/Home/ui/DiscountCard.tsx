import { FC, useMemo } from 'react';
import { ListCard, IListCardProps } from 'shared/ui/ListCard';
import styles from './DiscountCard.module.scss';

export interface IDiscountCardProps extends IListCardProps {
    price: number;
    discountPercent: number;
    productName: string;
    storeName: string;
}

export const DiscountCard: FC<IDiscountCardProps> = (props) => {
    const {
        price,
        discountPercent,
        productName,
        storeName
    } = props;

    const discountlessPrice = useMemo(
        () => price * 100 / (100 - discountPercent),
        [discountPercent, price]
    );

    return (
        <ListCard>
            <div className={styles.priceRow}>
                <span className={styles.price}>
                    {price}
                </span>
                <span className={styles.discountlessPrice}>
                    {discountlessPrice}
                </span>
            </div>
            <h3 className={styles.productName}>
                {productName}
            </h3>
            <p className={styles.storeName}>
                {storeName}
            </p>
        </ListCard>
    );
};

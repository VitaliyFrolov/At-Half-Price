import { FC, useMemo } from 'react';
import { Card, ICardProps } from 'shared/ui/Card';
import styles from './ListCard.module.scss';

export interface IProductCardProps extends ICardProps {
    price: number;
    discountPercent: number;
    productName: string;
    storeName: string;
    imgUrl: string;
}

export const ProductCard: FC<IProductCardProps> = (props) => {
    const {
        price,
        discountPercent,
        productName,
        storeName,
        imgUrl,
    } = props;

    const discountPrice = useMemo(
        () => price * (1 - discountPercent * 0.01),
        [discountPercent, price]
    );

    const imgOverlay = (
        <div className={styles.imgOverlay}>
            <div className={styles.discountMark}>
                -{discountPercent}%
            </div>
        </div>
    );

    return (
        <Card imgOverlay={imgOverlay} imgUrl={imgUrl}>
            <div className={styles.priceRow}>
                <span className={styles.price}>
                    {discountPrice.toFixed(2)}
                    <sup className={styles.discountlessPrice}>
                        {price.toFixed(2)}
                    </sup>
                </span>
            </div>
            <h3 className={styles.productName}>
                {productName}
            </h3>
            <p className={styles.storeName}>
                {storeName}
            </p>
        </Card>
    );
};

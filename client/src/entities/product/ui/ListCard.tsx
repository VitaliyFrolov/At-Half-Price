import { FC } from 'react';
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

    const imgOverlay = discountPercent && (
        <div className={styles.imgOverlay}>
            <div className={styles.discountMark}>
                -{discountPercent}%
            </div>
        </div>
    );

    const productPrice = price - (discountPercent * 0.01 * price);

    return (
        <Card
            imgOverlay={imgOverlay}
            imgUrl={imgUrl}
            objectFit="contain"
        >
            <div className={styles.priceRow}>
                <span className={styles.price}>
                    {productPrice.toFixed(2)}
                    {discountPercent && (
                        <sup className={styles.discountlessPrice}>
                            {price.toFixed(2)}
                        </sup>
                    )}
                </span>
            </div>
            <h3 className={styles.productName}>
                {productName}
            </h3>
            {storeName && (
                <p className={styles.storeName}>
                    {storeName}
                </p>
            )}
        </Card>
    );
};

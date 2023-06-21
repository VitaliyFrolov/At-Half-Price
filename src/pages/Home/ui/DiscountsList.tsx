import { FC } from 'react';
import { DiscountCard, IDiscountCardProps } from './DiscountCard';
import styles from './DiscountsList.module.scss';

export interface IDiscountsListProps {
    items: IDiscountCardProps[];
}

export const DiscountsList: FC<IDiscountsListProps> = (props) => {
    const { items } = props;

    const discrountsCards = items.map((item) => (
        <li className={styles.listItem}>
            <DiscountCard
                productName={item.productName}
                discountPercent={item.discountPercent}
                price={item.price}
                storeName={item.storeName}
                imgUrl={item.imgUrl}
                imgAlt={item.productName}
            />
        </li>
    ));

    return (
        <ul className={styles.list}>
            {discrountsCards}
        </ul>
    );
};
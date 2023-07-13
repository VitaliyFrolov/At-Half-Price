import { FC } from 'react';
import { List } from 'shared/ui/List';
import { DiscountCard, IDiscountCardProps } from './DiscountCard';

export interface IDiscountsListProps {
    className?: string;
    items: IDiscountCardProps[];
}

export const DiscountsList: FC<IDiscountsListProps> = (props) => {
    const {
        items,
        className
    } = props;

    const discrountsCards = items.map((item) => (
        <DiscountCard
            productName={item.productName}
            price={item.price}
            discountPercent={item.discountPercent}
            storeName={item.storeName}
            imgUrl={item.imgUrl}
            imgAlt={item.productName}
        />
    ));

    return (
        <List className={className}>
            {discrountsCards}
        </List>
    );
};

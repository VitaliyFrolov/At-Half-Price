import { FC } from 'react';
import { List } from 'shared/ui/List';
import { DiscountCard, IDiscountCardProps } from './DiscountCard';

export interface IDiscountsListProps {
    items: IDiscountCardProps[];
}

export const DiscountsList: FC<IDiscountsListProps> = (props) => {
    const { items } = props;

    const discrountsCards = items.map((item) => (
        <DiscountCard
            productName={item.productName}
            discountPercent={item.discountPercent}
            price={item.price}
            storeName={item.storeName}
            imgUrl={item.imgUrl}
            imgAlt={item.productName}
        />
    ));

    return (
        <List>
            {discrountsCards}
        </List>
    );
};

import { FC } from 'react';
import { List, IListProps } from 'shared/ui/List';
import { DiscountCard } from './DiscountCard';
import { DiscountModel } from '../lib/DiscountModel';

interface IDiscountsListProps extends IListProps<DiscountModel> {}

export const DiscountsList: FC<IDiscountsListProps> = (props) => {
    const {
        data,
        className,
        hasMore,
        isLoading,
        onScrollEnd
    } = props;

    return (
        <List
            className={className}
            data={data}
            hasMore={hasMore}
            isLoading={isLoading}
            onScrollEnd={onScrollEnd}
            itemContentRender={(data) => (
                <DiscountCard
                    productName={data.productName}
                    price={data.price}
                    imgUrl={data.imgUrl}
                    discountPercent={data.discountPercent}
                    storeName={data.storeName}
                />
            )}
        />
    );
};

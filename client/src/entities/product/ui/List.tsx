import { FC } from 'react';
import { List, IListProps } from 'shared/ui/List';
import { ProductCard } from './ListCard';
import { ProductModel } from '../lib/Model';

interface IProductsListProps extends IListProps<ProductModel> {}

export const ProductsList: FC<IProductsListProps> = (props) => {
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
                <ProductCard
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

import { FC } from 'react';
import { PageURL } from 'shared/lib/routes';
import { List, IListProps } from 'shared/ui/List';
import { StoreCard } from './ListCard';
import StoreModel from '../lib/Model';

interface IStoresListProps extends IListProps<StoreModel> {}

export const StoresList: FC<IStoresListProps> = (props) => {
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
                <StoreCard
                    name={data.name}
                    discountsCount={data.discountsCount}
                    imgUrl={data.imgUrl}
                    url={`${PageURL.Stores}/${data.id}`}
                />
            )}
        />
    );
};

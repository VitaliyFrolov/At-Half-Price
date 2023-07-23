import { FC, useMemo } from 'react';
import { List, IListProps } from 'shared/ui/List';
import { StoreCard } from './StoreCard';
import { PagePath } from 'app/lib/routes';
import StoreModel from '../lib/StoreModel';

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
                    url={`${PagePath.Stores}/${data.id}`}
                />
            )}
        />
    );
};

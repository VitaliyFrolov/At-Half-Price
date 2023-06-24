import { FC, useMemo } from 'react';
import { List } from 'shared/ui/List';
import { StoreCard, IStoreCardProps } from './StoreCard';

interface IStoresListProps {
    items: IStoreCardProps[];
}

export const StoresList: FC<IStoresListProps> = (props) => {
    const { items } = props;

    const storesCards = useMemo(() => items.map((item) => (
        <StoreCard
            key={item.name}
            name={item.name}
            discountsCount={item.discountsCount}
            imgUrl={item.imgUrl}
        />
    )), [items]);

    return (
        <List>
            {storesCards}
        </List>
    );
};

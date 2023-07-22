import { FC, useMemo } from 'react';
import { List } from 'shared/ui/List';
import { StoreCard, IStoreCardProps } from './StoreCard';

interface IStoresListProps {
    className?: string;
    items: IStoreCardProps[];
}

export const StoresList: FC<IStoresListProps> = (props) => {
    const {
        items,
        className
    } = props;

    const storesCards = useMemo(() => items.map((item) => (
        <StoreCard
            key={item.name}
            name={item.name}
            discountsCount={item.discountsCount}
            imgUrl={item.imgUrl}
            url={item.url}
        />
    )), [items]);

    return (
        <List className={className}>
            {storesCards}
        </List>
    );
};

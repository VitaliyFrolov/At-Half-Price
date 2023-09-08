import { FC, useMemo } from "react";
import { StoresList } from 'entities/store/ui/List';
import { useStores } from 'entities/store/hooks/useStores';
import { CategoryFilter } from 'features/ListFiltration';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import { FetchStatus, useFetch } from 'shared/hooks/useFetch';
import styles from './Page.module.scss';

interface IStoreCategory {
    name: string;
    id: string;
}

export const Page: FC = () => {
    const { 
        data: stores,
        hasMore,
        status,
        getNextPage,
        changeFilter
    } = useStores();

    const { 
        data: storeCategories
    } = useFetch<IStoreCategory[]>('http://localhost:3005/stores-categories');

    const categories = useMemo(() => storeCategories?.map((category) => ({ caption: category.name , id: category.id })), [storeCategories]);

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={styles.sectionTitle}>
                        Магазины
                    </Title>
                    <CategoryFilter
                        className={styles.categoryFilter}
                        items={categories}
                        onChange={(id) => changeFilter({ category: id })}
                    />
                    <StoresList
                        className={styles.storesList}
                        data={stores}
                        isLoading={status === FetchStatus.Loading}
                        hasMore={hasMore}
                        onScrollEnd={getNextPage}
                    />
                </section>
            </Container>
        </div>
    )
};
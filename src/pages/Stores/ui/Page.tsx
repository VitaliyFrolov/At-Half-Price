import { FC, useState, useMemo } from "react";
import { StoresList, CategoryFilter, useStores } from 'features/StoresList';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import styles from './Page.module.scss';
import { FetchStatus, useFetch } from 'shared/hooks/useFetch';

interface IStoreCategory {
    name: string;
    id: string;
}

export const Page: FC = () => {
    const [category, setCategory] = useState<string>();
    const { 
        data: stores,
        hasMore,
        status,
        getNextPage
    } = useStores({ category });
    const { 
        data: storeCategories,
        status: categoriesStatus
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
                        onChange={(id) => setCategory(id)}
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
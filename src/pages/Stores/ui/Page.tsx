import { FC, useState, useMemo } from "react";
import { StoresList, CategoryFilter, useStores } from 'features/StoresList';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import { FetchStatus, useFetch } from 'shared/hooks/useFetch';
import { useT } from "features/I18next/hooks/useT";
import { useRTL } from "features/I18next/hooks/useRTL";
import cn from "classnames";
import styles from './Page.module.scss';

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

    const t = useT(['storesPage']);

    const categories = useMemo(() => storeCategories?.map((category) => ({ caption: category.name , id: category.id })), [storeCategories]);

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={cn([styles.sectionTitle, useRTL('rtlText')])}>
                        {t('title')}
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
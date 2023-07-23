import { FC, useState, useLayoutEffect } from "react";
import { StoresList, CategoryFilter, useStores } from 'features/StoresList';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import styles from './Page.module.scss';
import { getRegistryData } from '../lib/dataGetters';

export const Page: FC = () => {
    const {
        isLoading,
        stores,
        error,
        getNextStoresPage,
        hasMore
    } = useStores();
    const [categories, setCategories] = useState([]);

    useLayoutEffect(() => {
        // getRegistryData().then((response) => {
        //     //@ts-ignore clear it
        //     setCategories(response.categories);
        // })
    }, []);

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={styles.sectionTitle}>
                        Магазины
                    </Title>
                    {/* <CategoryFilter
                        className={styles.categoryFilter}
                        items={categories}
                        onChange={() => null}
                    /> */}
                    {/* @ts-ignore */}
                    <StoresList
                        className={styles.storesList}
                        data={stores}
                        isLoading={isLoading}
                        hasMore={hasMore}
                        onScrollEnd={getNextStoresPage}
                    />
                </section>
            </Container>
        </div>
    )
};
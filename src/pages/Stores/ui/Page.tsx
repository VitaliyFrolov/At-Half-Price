import { FC, useState, useLayoutEffect } from "react";
import { StoresList, CategoryFilter, useStores } from 'features/StoresList';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import styles from './Page.module.scss';
import { getRegistryData } from '../lib/dataGetters';
import { FetchStatus, useFetch } from 'shared/hooks/useFetch';
import { HTTP } from 'shared/lib/http';
import { usePagedFetch } from 'shared/hooks/usePagedFetch';

export const Page: FC = () => {
    // const {
    //     isLoading,
    //     stores,
    //     error,
    //     getNextStoresPage,
    //     hasMore
    // } = useStores();
    const { 
        data,
        hasMore,
        status,
        getNextPage
    } = useStores();
    const [categories, setCategories] = useState([]);

    useLayoutEffect(() => {
        // getRegistryData().then((response) => {
        //     //@ts-ignore clear it
        //     setCategories(response.categories);
        // })
    }, []);

    console.log('render')

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
                    {data && (
                        <StoresList
                            className={styles.storesList}
                            data={data}
                            isLoading={status === FetchStatus.Loading}
                            hasMore={hasMore}
                            onScrollEnd={getNextPage}
                        />
                    )}
                </section>
            </Container>
        </div>
    )
};
import { FC, useState, useEffect, useLayoutEffect } from "react";
import { StoresList, getStores, IStoreCardProps, CategoryFilter } from 'features/StoresList';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import styles from './Page.module.scss';
import { getRegistryData } from '../lib/dataGetters';

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState()

    useLayoutEffect(() => {
        getRegistryData().then((response) => {
            //@ts-ignore todo: clear it
            setStores(response.stores);
            //@ts-ignore clear it
            setCategories(response.categories);
        })
    }, [filter]);

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
                        onChange={() => null}
                    />
                    <StoresList
                        className={styles.storesList}
                        items={stores}
                    />
                </section>
            </Container>
        </div>
    )
};
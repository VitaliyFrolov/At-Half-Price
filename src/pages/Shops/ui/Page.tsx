import { FC, useState, useEffect } from "react";
import { IStoreCardProps } from '../../Home/ui/StoreCard';
import { getStores } from '../../Home/lib/dataGetters'
import styles from './Page.module.scss';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import { StoresList } from "pages/Home/ui/StoresList";
import { ProductFilter } from "shared/ui/ProductFilter/ProductFilter";
import { Search } from "shared/ui/Search";
import { Button } from "shared/ui/Button";

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        getStores().then((response) => setStores(response as IStoreCardProps[]));
    }, []);

    useEffect(() => {
        if (fetching) {
            getStores()
                .then((response) => setStores([...stores, ...response as IStoreCardProps[]]))
                .finally(() => setFetching(false))
        }
    }, [fetching, stores]);

    return (
        <Container>
            <section className={styles.section}>
                <div className={styles.listHeader}>
                    <Title>
                        Магазигы
                    </Title>
                    <div className={styles.searchWrapper}>
                        <Search button={true} placeholder='Поиск магазинов' />
                    </div>
                </div>
               <div className={styles.filterWrapper}>
                    <ProductFilter />
               </div>
                <StoresList items={stores} />
                <div className={styles.btnWrapper}>
                    <span onClick={() => setFetching(true)}>
                        <Button>
                            Смотреть еще
                        </Button>
                    </span>
                </div>
            </section>
        </Container>
    )
};
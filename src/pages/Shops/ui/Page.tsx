import { FC, useState, useEffect } from "react";
import { IStoreCardProps } from '../../Home/ui/StoreCard';
import { getStores } from '../../Home/lib/dataGetters'
import styles from './Page.module.scss';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import { StoresList } from "pages/Home/ui/StoresList";
import { FilterButton } from "shared/ui/filterBtn";
import { Search } from "shared/ui/Search";
import { Button } from "shared/ui/Button";
import { dataURL } from "../lib/dataURL";

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [fetching, setFetching] = useState(true);
    const [filter, setFilter] = useState(dataURL.allStores)

    useEffect(() => {
        getStores(filter).then((response) => setStores(response as IStoreCardProps[]))
    }, [filter]);

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
                        Магазины
                    </Title>
                    <form className={styles.searchForm}>
                        <img
                            src="/images/svg/searchIcon.svg"
                            alt="search icon"
                            width={17}
                            height={17}
                            className={styles.searchIcon}
                        />
                        <Search className={styles.input} placeholder='Поиск магазинов' />
                        <Button className={styles.inputBtn}>
                            Найти
                        </Button>
                    </form>
                </div>
                <div className={styles.filterWrapper}>
                    <FilterButton onClick={() => setFilter(dataURL.allStores)} title='Все магазины' />
                    <FilterButton onClick={() => setFilter(dataURL.supermarketStores)} title='Супермаркеты ' />
                    <FilterButton title='Магазины Электронники' />
                    <FilterButton title='Детские магазины' />
                    <FilterButton title='Косметика' />
                    <FilterButton title='Алкогольные магазины' />
                    <FilterButton title='Товары для дома' />
                    <FilterButton title='Зоотовары' />
                </div>
                <StoresList items={stores} />
                <div className={styles.btnWrapper}>
                    <span onClick={() => setFetching(true)}>
                        <Button className={styles.button}>
                            Смотреть еще
                        </Button>
                    </span>
                </div>
            </section>
        </Container>
    )
};
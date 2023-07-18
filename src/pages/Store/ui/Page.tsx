import { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { http } from "shared/lib/http";
import { IDiscountCardProps } from "pages/Home/ui/DiscountCard";
import { Checkbox } from "shared/ui/Checkbox";
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import styles from './Page.module.scss';
import { DiscountsList } from "pages/Home/ui/DiscountsList";
import { Button } from "shared/ui/Button";
import { FilterButton } from "shared/ui/filterBtn";
import { Search } from "shared/ui/Search";
import { dataURL } from "pages/Stores/lib/dataURL";

export const Page: FC = () => {
    const {store} = useParams();
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);
    const [fetching, setFetching] = useState(true);
    const [filter, setFilter] = useState(`http://localhost:3005/${store}`)
    
    useEffect(() => {
        http.get(filter).then((response) => setDiscounts (response as IDiscountCardProps[]))
    }, [filter]);

    useEffect(() => {
        if (fetching) {
            http.get(filter)
                .then((response) => setDiscounts([...discounts, ...response as IDiscountCardProps[]]))
                .finally(() => setFetching(false))
        }
    }, [filter, discounts, fetching])

    return (
        <Container>
            <section className={styles.section}>
                <Title>
                    <span>
                        Скидки в магазине {store}
                    </span>
                </Title>
                <div className={styles.sectionHeader}>
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
                <Checkbox
                    text="Товары только со скидкой"
                />
                <div className={styles.filterWrapper}>
                    <FilterButton onClick={() => setFilter(dataURL.allDiscounts)} title='Все магазины' />
                    <FilterButton title='Супермаркеты ' />
                    <FilterButton title='Магазины Электронники' />
                    <FilterButton title='Детские магазины' />
                    <FilterButton title='Косметика' />
                    <FilterButton title='Алкогольные магазины' />
                    <FilterButton title='Товары для дома' />
                    <FilterButton title='Зоотовары' />
                </div>
                <DiscountsList items={discounts} />
                <div className={styles.sectionFooter}>
                    <Button onClick={() => setFetching(true)}>
                        Показать еще
                    </Button>
                </div>
            </section>
        </Container>
    )
}
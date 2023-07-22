import { FC, useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
import { IDiscountCardProps } from "pages/Home/ui/DiscountCard";
import { Checkbox } from "shared/ui/Checkbox";
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import styles from './Page.module.scss';
import { DiscountsList } from "pages/Home/ui/DiscountsList";
import { Button } from "shared/ui/Button";
import { HTTP } from "shared/lib/http";
import { CategoryFilter } from "features/StoresList";
import { getRegistryData } from "pages/Stores/lib/dataGetters";

export const Page: FC = () => {
    const {storeId} = useParams();
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);
    const [fetching, setFetching] = useState(true);
    const [filter, setFilter] = useState(`http://localhost:3005/${storeId}`)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (fetching) {
            HTTP.get(filter)
                .then((response) => setDiscounts([...discounts, ...response as IDiscountCardProps[]]))
                .finally(() => setFetching(false))
        }
    }, [filter, discounts, fetching])

    useLayoutEffect(() => {
        getRegistryData().then((response) => {
            //@ts-ignore clear it
            setCategories(response.categories);
        })
    }, [filter]);

    return (
        <Container>
            <section className={styles.section}>
                <Title>
                    {`Скидки в магазине ${storeId}`}
                </Title>
                <div className={styles.sectionHeader}>
                    
                </div>
                <Checkbox
                    label="Товары только со скидкой"
                />
               <CategoryFilter
                    className={styles.categoryFilter}
                    items={categories}
                    onChange={() => null}
               />
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
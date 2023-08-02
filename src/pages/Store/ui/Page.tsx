import { FC, useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router";
// import { IDiscountCardProps } from "pages/Home/ui/DiscountCard";
import { Checkbox } from "shared/ui/Checkbox";
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import styles from './Page.module.scss';
// import { DiscountsList } from "pages/Home/ui/DiscountsList";
import { CategoryFilter } from "features/StoresList";
import { HTTP } from "shared/lib/http";
import { getRegistryData } from "pages/Stores/lib/dataGetters";
import { useT } from "features/I18next/hooks/useT";
import { useRTL } from "features/I18next/hooks/useRTL";

export const Page: FC = () => {
    const {storeId} = useParams();
    // const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);
    // const [categories, setCategories] = useState([]);

    // useLayoutEffect(() => {
    //     HTTP.get(`http://localhost:3005/${storeId}`)
    //         .then((response) => setDiscounts(response as IDiscountCardProps[]))
            
    //     getRegistryData().then((response) => {
    //         //@ts-ignore clear it
    //         setCategories(response.categories);
    //     })
    // }, [storeId]);

    const t = useT(['storePage'])

    return (
        <Container>
            <section className={styles.section}>
                <Title className={useRTL('rtlText')}>
                    {`${t('title')} ${storeId}`}
                </Title>
                <div className={styles.sectionHeader}>
                    
                </div>
                <Checkbox
                    label="Товары только со скидкой"
                />
               {/* <CategoryFilter
                    className={styles.categoryFilter}
                    items={categories}
                    onChange={() => null}
               />
                <DiscountsList items={discounts} /> */}
                <div className={styles.sectionFooter}>
                </div>
            </section>
        </Container>
    )
}
import { FC } from "react";
import { useParams } from "react-router";
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import { Selector } from 'shared/ui/Selector';
import { ProductsSortType, useProducts } from 'entities/product/hooks/useProducts';
import { ProductsList } from 'entities/product/ui/List';
import { sortSelectorItems } from '../lib/const';
import styles from './Page.module.scss';

export const Page: FC = () => {
    const { storeID } = useParams();
    const { data, changeFilter, filter } = useProducts({ filter: { storeID }});

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title>
                        {`Скидки в магазине ${storeID}`}
                    </Title>
                    <div className={styles.sectionHeader}>
                        <div className={styles.selector}>
                            <span>Сортировать:</span>
                            <Selector
                                items={sortSelectorItems}
                                value={filter?.sort}
                                onSelectedChange={(id) => changeFilter({ sort: id as ProductsSortType })}
                            />
                        </div>
                    </div>
                    <ProductsList data={data} />
                </section>
            </Container>
        </div>
    );
};

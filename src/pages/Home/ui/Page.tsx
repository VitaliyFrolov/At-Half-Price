import { FC, useEffect, useState } from 'react';
import { Container } from 'shared/ui/Container';
import { StoresList } from './StoresList';
import { getStores, getDiscounts } from '../lib/dataGetters';
import { IStoreCardProps } from './StoreCard';
import { DiscountsList } from './DiscountsList';
import { IDiscountCardProps } from './DiscountCard';
import styles from './Page.module.scss';
import { Title } from 'shared/ui/Title/Title';
import { Btn } from 'shared/ui/Btn/Btn';

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);

    useEffect(() => {
        getStores().then((response) => setStores(response as IStoreCardProps[]));
        getDiscounts().then((response) => setDiscounts(response as IDiscountCardProps[]));
    }, []);

    return (
        <Container>
            <section className={styles.section}>
                <div className={styles.listHeader}>
                    <Title text='Магазины со скидками в Тель-Авиве' />
                </div>
                <StoresList items={stores} />
                <div className={styles.btnWrapper}>
                    <Btn text='Смотреть все' svgId='pageBtn' />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.listHeader}>
                    <Title text='Самые выгодные скидки сейчас' />
                </div>
                <DiscountsList items={discounts} /> 
                <div className={styles.btnWrapper}>
                    <Btn text='Смотреть все' svgId='pageBtn' />
                </div>   
            </section>
        </Container>
    )
};

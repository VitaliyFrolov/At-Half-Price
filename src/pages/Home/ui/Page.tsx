import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'shared/ui/Container';
import { DiscountsList } from './DiscountsList';
import { Title } from 'shared/ui/Title';
import { Button } from 'shared/ui/Button';
import { PagePath } from 'app/lib/routes';
import { IDiscountCardProps } from './DiscountCard';
import { StoresList, getStores, IStoreCardProps } from 'features/StoresList';
import { getDiscounts } from '../lib/dataGetters';
import styles from './Page.module.scss';

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);

    useEffect(() => {
        // getStores().then((response) => setStores(response));
        getDiscounts().then((response) => setDiscounts(response as IDiscountCardProps[]));
    }, []);

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={styles.title}>
                        Магазины со скидками в Тель-Авиве
                    </Title>
                    {/* <StoresList className={styles.content} items={stores} /> */}
                    <div className={styles.sectionFooter}>
                        <Link to={PagePath.Stores}>
                            <Button>
                                Смотреть все
                            </Button>
                        </Link>
                    </div>
                </section>
                <section className={styles.section}>
                    <Title className={styles.title}>
                        Самые выгодные скидки сейчас
                    </Title>
                    <DiscountsList className={styles.content} items={discounts} /> 
                    <div className={styles.sectionFooter}>
                        <Link to={PagePath.Stores}>
                            <Button>
                                Смотреть все
                            </Button>
                        </Link>
                    </div>
                </section>
            </Container>
        </div>
    )
};

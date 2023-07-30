import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageURL } from 'shared/lib/routes';
import { useProducts } from 'entities/product/hooks/useProducts';
import { useStores } from 'entities/store/hooks/useStores';
import { StoresList } from 'entities/store/ui/List';
import { ProductsList } from 'entities/product/ui/List';
import { Container } from 'shared/ui/Container';
import { Title } from 'shared/ui/Title';
import { Button } from 'shared/ui/Button';
import styles from './Page.module.scss';

export const Page: FC = () => {
    const { 
        data: stores,
        status: storesStatus
    } = useStores({ limit: 8 });
    const {
        data: discounts,
        status: discountsStatus
    } = useProducts();

    return (
        <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={styles.title}>
                        Магазины со скидками в Тель-Авиве
                    </Title>
                    <StoresList
                        className={styles.content}
                        data={stores}
                        hasMore={false}
                    />
                    <div className={styles.sectionFooter}>
                        <Link to={PageURL.Stores}>
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
                    <ProductsList
                        className={styles.content}
                        data={discounts}
                        hasMore={false}
                    /> 
                    <div className={styles.sectionFooter}>
                        <Link to={PageURL.Stores}>
                            <Button>
                                Смотреть все
                            </Button>
                        </Link>
                    </div>
                </section>
            </Container>
        </div>
    );
};

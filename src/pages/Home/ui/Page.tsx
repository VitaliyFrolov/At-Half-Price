import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PagePath } from 'app/lib/routes';
import { StoresList, useStores } from 'features/StoresList';
import { DiscountsList, useDiscounts } from 'features/DiscountsList';
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
    } = useDiscounts({ limit: 12 });

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
                    <DiscountsList
                        className={styles.content}
                        data={discounts}
                        hasMore={false}
                    /> 
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

import { FC, useEffect, useState } from "react";
import { Container } from 'shared/ui/Container';
import { Title } from 'shared/ui/Title';
import styles from './Page.module.scss';
import { List } from 'shared/ui/List';

export const Page: FC = () => {
    const [shops, setShops] = useState([]);

    const shopsCards = shops.map((item) => (<div></div>))

    return (
       <div className={styles.page}>
            <Container>
                <section className={styles.section}>
                    <Title className={styles.sectionTitle}>
                        Магазины
                    </Title>
                    <div>input</div>
                    <div>filter panel</div>
                    <InfinityScroll>
                        <List>
                            {shopsCards}
                        </List>
                    </InfinityScroll>
                </section>
            </Container>
       </div>
    );
};
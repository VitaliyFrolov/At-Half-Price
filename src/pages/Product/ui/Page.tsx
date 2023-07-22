import { FC } from 'react';
import { useParams } from 'react-router';
import { Container } from 'shared/ui/Container';
import styles from './Page.module.scss';

export const Page: FC = () => {
    const { storeId, productId } = useParams();

    return (
        <Container>
            <h2>
                Товар { productId } из магазина { storeId }
            </h2>
        </Container>
    )
}
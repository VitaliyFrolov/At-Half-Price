import { FC } from 'react';
import { useParams } from 'react-router';
import { Container } from 'shared/ui/Container';
import styles from './Page.module.scss';

export const Page: FC = () => {
    const { store, product } = useParams();

    return (
        <Container>
            <h2>
                Товар { product } из магазина { store }
            </h2>
        </Container>
    )
}
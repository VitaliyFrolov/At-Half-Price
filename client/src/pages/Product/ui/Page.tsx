import { FC } from 'react';
import { useParams } from 'react-router';
import { Container } from 'shared/ui/Container';

export const Page: FC = () => {
    const { productID } = useParams();

    return (
        <Container>
            <h2>
                Товар { productID }
            </h2>
        </Container>
    )
}
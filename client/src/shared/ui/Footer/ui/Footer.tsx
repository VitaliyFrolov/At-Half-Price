import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'shared/ui/Container';
import { Title } from 'shared/ui/Title';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
           <Container>
                <div className={styles.footerContent}>
                    <div className={styles.column}>
                        <Title className={styles.columnTitle} tag="h4">Помощь</Title>
                        <ul className={styles.columnLinks}>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    Инструкции и советы
                                </Link>
                            </li>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    Написать в поддержку
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <Title className={styles.columnTitle} tag="h4">Партнерство</Title>
                        <ul className={styles.columnLinks}>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    Свяжаться с нами
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <Title className={styles.columnTitle} tag="h4">Мы в соцсетях</Title>
                        <ul className={styles.columnLinks}>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/" target="_black" rel="noopener norefferer">
                                   Facebook
                                </Link>
                            </li>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/" target="_black" rel="noopener norefferer">
                                   Instagram
                                </Link>
                            </li>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/" target="_black" rel="noopener norefferer">
                                   VK
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
           </Container>
        </footer>
    );
};

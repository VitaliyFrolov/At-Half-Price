import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'shared/ui/Container';
import { Title } from 'shared/ui/Title';
import { useT } from 'features/I18next/hooks/useT';
import { useRTL } from 'features/I18next/hooks/useRTL';
import cn from 'classnames';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    const t = useT(['footer']);
    return (
        <footer className={styles.footer}>
           <Container>
                <div className={styles.footerContent}>
                    <div className={styles.column}>
                        <Title className={cn([styles.columnTitle, useRTL('rtlText')])} tag="h4">{t('support.support')}</Title>
                        <ul className={styles.columnLinks}>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    {t('support.instructions')}
                                </Link>
                            </li>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    {t('support.write')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cn([styles.column, useRTL('rtlText')])}>
                        <Title className={styles.columnTitle} tag="h4">{t('partnership.partnership')}</Title>
                        <ul className={styles.columnLinks}>
                            <li className={styles.columnLinksItem}>
                                <Link className={styles.columnLink} to="/">
                                    {t('partnership.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <Title className={cn([styles.columnTitle, useRTL('rtlText')])} tag="h4">{t('media')}</Title>
                        <ul className={cn([styles.columnLinks, useRTL('rtlText')])}>
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

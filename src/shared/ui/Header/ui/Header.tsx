import { FC } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";
import { PagePath } from 'app/lib/routes';
import { Container } from 'shared/ui/Container';
import { SearchInput } from 'shared/ui/SearchInput';
import { Avatar } from 'shared/ui/Avatar';
import { LocationSelector } from './LocationSelector';
import { useT } from 'features/I18next/hooks/useT';
import { useRTL } from 'features/I18next/hooks/useRTL';

import styles from "./Header.module.scss";

interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = (props) => {
    const { className } = props;
    const t = useT(['header']);

    return (
        <header className={cn([styles.header, className])}>
            <Container>
                <div className={cn([styles.headerContent, useRTL('rtlText')])}>
                    <Link to={PagePath.Home}>
                        <img
                            className={cn([styles.logo, useRTL('rtlLogo')])}
                            width={60}
                            height={60}
                            src="/images/logo.png"
                            alt="Logo of product"
                        />
                    </Link>
                    <LocationSelector className={cn([styles.location, useRTL('rtlSelector')])} /> 
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Home}>
                                    {t('nav.discountBtn')}
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Home}>
                                    {t('nav.couponsBtn')}
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Stores}>
                                    {t('nav.storesBtn')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <SearchInput
                        className={styles.searchInput}
                        placeholder={t('placeholder')}
                        onChange={() => null}
                    />
                    <Avatar className={cn([styles.avatar, useRTL('rtlAvatar')])} />
                </div>
            </Container>
        </header>
    )
};

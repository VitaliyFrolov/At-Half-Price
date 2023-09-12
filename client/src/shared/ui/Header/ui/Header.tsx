import { FC, useState } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";
import { PageURL } from 'shared/lib/routes';
import { Container } from 'shared/ui/Container';
import { SearchInput, SearchModal } from 'features/GlobalSearch';
import { Avatar } from 'shared/ui/Avatar';
import { LocationSelector } from './LocationSelector';
import { useT } from 'shared/i18n/hooks/useT';
import { useLanguage } from 'shared/i18n/hooks/useLanguage';
import styles from "./Header.module.scss";

interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = (props) => {
    const { className } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const t = useT(['header']);
    const language = useLanguage();

    return (
        <header className={cn([styles.header, className])}>
            <Container>
                <div className={styles.headerContent}>
                    <Link to={PageURL.Main}>
                        <img
                            className={language === 'he' ? styles.logoRtl : styles.logo}
                            width={60}
                            height={60}
                            src="/images/logo.png"
                            alt="Logo of product"
                        />
                    </Link>
                    <LocationSelector className={language === 'he' ? styles.locationRtl : styles.location} /> 
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PageURL.Main}>
                                    {t('nav.discountBtn')}
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PageURL.Main}>
                                    {t('nav.couponsBtn')}
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PageURL.Stores}>
                                    {t('nav.storesBtn')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <SearchInput
                        className={styles.searchInput}
                        onChange={() => null}
                        onClick={() => setModalVisible(true)}
                    />
                    <SearchModal visible={modalVisible} />  
                    <Avatar className={language === 'he' ? styles.avatarRtl : styles.avatar} />
                </div>
            </Container>
        </header>
    )
};

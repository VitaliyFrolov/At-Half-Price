import { FC } from 'react';
import cn from 'classnames';
import { Link } from "react-router-dom";
import { PagePath } from 'app/lib/routes';
import { Container } from 'shared/ui/Container';
import { SearchInput } from 'shared/ui/SearchInput';
import { Avatar } from 'shared/ui/Avatar';
import { LocationSelector } from './LocationSelector';
import styles from "./Header.module.scss";

interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = (props) => {
    const { className } = props;

    return (
        <header className={cn([styles.header, className])}>
            <Container>
                <div className={styles.headerContent}>
                    <Link to={PagePath.Home}>
                        <img
                            className={styles.logo}
                            width={60}
                            height={60}
                            src="/images/logo.png"
                            alt="Logo of product"
                        />
                    </Link>
                    <LocationSelector className={styles.location} /> 
                    <nav className={styles.navigation}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Home}>
                                    Скидки
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Coupons}>
                                    Купоны
                                </Link>
                            </li>
                            <li className={styles.navigationItem}>
                                <Link className={styles.navigationLink} to={PagePath.Stores}>
                                    Магазины
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <SearchInput
                        className={styles.searchInput}
                        placeholder="Поиск акций и магазинов"
                        onChange={() => null}
                    />
                    <Avatar className={styles.avatar} />
                </div>
            </Container>
        </header>
    )
};

import { Link } from "react-router-dom";
import styles from "./Header.module.scss"
import { SvgTools } from "shared/ui/svgTools/SvgTools";


interface Props {}

export const Header = (props: Props) => {
    return (
        <div className={styles.shadow}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.leftWrapper}>
                        <div className={styles.logo}>
                            <SvgTools id="logo" />
                        </div>
                        <nav>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <SvgTools id="location" />
                                    <p className={styles.text}>
                                        Тель Авив 
                                    </p>
                                </li>
                                <li className={styles.item}>
                                    <Link 
                                        className={styles.link}
                                        to={'/'}>
                                        <p className={styles.text}>
                                            Скидки
                                        </p>
                                    </Link>
                                </li>
                                <li className={styles.item}>
                                    <p className={styles.text}>
                                        Купоны 
                                    </p>
                                </li>
                                <li className={styles.item}>
                                    <Link 
                                        className={styles.link}
                                        to={'/shops'}>
                                        <p className={styles.text}>
                                            Магазины 
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.rightWrapper}>
                        <div className={styles.input}>
                            input
                        </div>
                        <div className={styles.user} />
                    </div>
                </div>
            </div>
        </div>
    )
};
import { FC } from 'react';
import styles from './appPreloader.module.scss';

export const AppPreloader: FC = () => {
    return (
        <section className={styles.preloader}>
           <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    Please wait...
                </h2>
           </div>
        </section>
    )
}
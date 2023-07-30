import styles from './Banner.module.scss';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <img className={styles.bannerPicture} src="/images/banner.jpeg" alt="This is a whole from these places" />
        </div>
    );
};

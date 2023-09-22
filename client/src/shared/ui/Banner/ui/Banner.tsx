import { FC } from 'react';
import cn from 'classnames';
import styles from './Banner.module.scss';

interface IBannerProps {
    className?: string;
}

export const Banner: FC<IBannerProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn([styles.banner, className])}>
            <img
                className={styles.bannerPicture}
                src="/media/banner_placeholder.png"
                alt="Banner placeholder"
            />
        </div>
    );
};

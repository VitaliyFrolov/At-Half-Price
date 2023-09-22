import { FC, SyntheticEvent } from 'react';
import cn from 'classnames';
import styles from './Avatar.module.scss';

type TAvatarSize = 's' | 'm';

export interface IAvatarProps {
  className?: string;
  onClick?: (event?: SyntheticEvent) => void;
  userId?: number;
  size?: TAvatarSize;
}

const avatarSizes: Record<TAvatarSize, number> = {
  s: 30,
  m: 50
};

export const Avatar: FC<IAvatarProps> = (props) => {
  const {
    className,
    onClick,
    size = 's',
    userId = 0
  } = props;

  return (
    <span
      className={cn([styles.avatar, className], { onClick: 'clickable' })}
      onClick={onClick}
    >
      <img
        className={styles.avatarImg}
        src={`/media/avatars/${userId}.png`}
        alt="Avatar of user"
        width={avatarSizes[size]}
        height={avatarSizes[size]}
      />
    </span>
  );
};

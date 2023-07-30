import { FC } from 'react';
import cn from 'classnames';
import { Icon, IconID } from 'shared/ui/Icon';
import { ISelectorProps, Selector } from 'shared/ui/Selector';
import styles from './LocationSelector.module.scss';

interface ILocationSelectorProps {
  className?: string;
}

const locations: ISelectorProps['items'] = [
  {
    caption: 'Теляви',
    id: 'теляви'
  },
  {
    caption: 'Еще что то',
    id: 'чтото'
  }
]

export const LocationSelector: FC<ILocationSelectorProps> = (props) => {
  const {
    className
  } = props;

  return (
    <div className={cn([styles.locationSelector, className])}>
      <Icon className={styles.icon} id={IconID.Pointer} />
      <Selector
        className={styles.baseSelector}
        value="теляви"
        items={locations}
      /> 
    </div>
  );
}
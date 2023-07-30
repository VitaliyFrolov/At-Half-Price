import { FC, useCallback, useMemo, useRef, useState } from 'react';
import cn from 'classnames';
import { Popup } from 'shared/ui/Popup';
import styles from './Selector.module.scss';

export interface ISelectorItem {
  caption: string;
  id: string | null;
}

export enum SelectorTheme {
  Outlined = 'outlined',
  Text = 'text',
  Default = Outlined
}

export interface ISelectorProps {
  theme?: SelectorTheme;
  className?: string;
  items: ISelectorItem[];
  value?: ISelectorItem['id']
  onSelectedChange?: (id: ISelectorItem['id']) => void;
}

export const Selector: FC<ISelectorProps> = (props) => {
  const { 
    className,
    value = null,
    items,
    theme = SelectorTheme.Default,
    onSelectedChange = () => null
  } = props;
  const [opened, setOpened] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const onItemClick = useCallback((id: ISelectorItem['id']) => {
    onSelectedChange(id);
    setOpened(false);
  }, [onSelectedChange]);

  const toggleOpened = () => setOpened((prevValue) => !prevValue);

  const selectorItems = useMemo(() => items.map((item) => (
    <li
      key={item.id}
      className={cn([styles.selectorItem, 'truncate'])}
      onClick={() => onItemClick(item.id)}
    >
      {item.caption}
    </li>
  )), [items, onItemClick])

  const selectedCaption = useMemo(() => items.find((item) => item.id === value)?.caption, [items, value]);
  const boxBoundingRect = boxRef.current?.getBoundingClientRect();

  return (
    <>
      <div
        className={cn([styles.selectorBox, className, styles[`box-${theme}`]])}
        ref={boxRef}
        onClick={toggleOpened}
      >
        {selectedCaption}
      </div>
      {opened && boxRef.current && boxBoundingRect && (
        <Popup
          className={styles[`popup-${theme}`]}
          style={{ width: boxRef.current.offsetWidth }}
          left={boxBoundingRect.left}
          top={boxBoundingRect.top + boxRef.current.clientHeight}
        >
          <ul className={styles.selectorList}>
            {selectorItems}
          </ul>
        </Popup>
      )}
    </>
  );
}
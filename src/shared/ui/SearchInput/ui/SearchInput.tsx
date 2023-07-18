import { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import { Input, IInputProps, InputTheme } from 'shared/ui/Input';
import styles from './SearchInput.module.scss';

interface ISearchInputProps {
  className?: string;
  onChange: (value: string) => void;
  minLength?: number;
  value?: string;
  placeholder?: IInputProps['placeholder'];
}

export const SearchInput: FC<ISearchInputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    placeholder
  } = props;

  const onChangeWrapper = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  }

  return (
    <Input
      className={className}
      iconPosition="left"
      iconSize="m"
      theme={InputTheme.Outlined}
      value={value}
      onChange={onChangeWrapper}
      placeholder={placeholder}
    />
  )
}
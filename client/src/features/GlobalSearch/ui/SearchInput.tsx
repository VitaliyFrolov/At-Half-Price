import { IconID } from 'shared/ui/Icon';
import { Input, IInputProps, InputTheme } from 'shared/ui/Input';

interface ISearchInputProps {
  className?: IInputProps['className']
  onClick?: IInputProps['onClick'];
  onChange?: IInputProps['onChange'];
  disabled?: IInputProps['disabled'];
  focus?: IInputProps['focus'];
}

export const SearchInput = (props: ISearchInputProps) => {
  const { 
    onClick,
    onChange,
    disabled,
    className,
    focus
  } = props;

  return (
   <Input
    className={className}
    placeholder="Глобальный поиск"
    iconId={IconID.Search}
    onClick={onClick}
    onChange={onChange}
    theme={InputTheme.Outlined}
    disabled={disabled}
    focus={focus}
   />
  );
}
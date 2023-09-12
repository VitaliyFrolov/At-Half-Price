import { IconID } from 'shared/ui/Icon';
import { Input, IInputProps, InputTheme } from 'shared/ui/Input';
import { useT } from 'shared/i18n/hooks/useT';

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

  const t = useT(['header'])

  return (
   <Input
    className={className}
    placeholder={t('search.placeholder')}
    iconId={IconID.Search}
    onClick={onClick}
    onChange={onChange}
    theme={InputTheme.Outlined}
    disabled={disabled}
    focus={focus}
   />
  );
}
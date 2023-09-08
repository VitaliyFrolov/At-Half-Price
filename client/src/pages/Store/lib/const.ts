import { ProductsSortType } from 'entities/product/hooks/useProducts';
import { ISelectorItem } from 'shared/ui/Selector';

export const sortSelectorItems: ISelectorItem[] = [
  {
    caption: 'По умолчанию',
    id: null
  },
  {
    caption: 'Сначала со скидками',
    id: ProductsSortType.DiscountsFirst
  }
]
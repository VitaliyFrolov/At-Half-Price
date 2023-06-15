import '../../styles/index.scss'
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';
import { PageBtn } from '../../shared/PageBtn/PageBtn';
import { Link } from 'react-router-dom';

interface Props {
    discountCard: never[];
    storesCard: never[];
    searchInput: any;
    searchValue: any;
}

export const Home = ({discountCard, storesCard, searchInput, searchValue}: Props) => {
    return (
        <>
            <AllStores
                items={storesCard}
                title="Магазины со скидками в Тель-Авиве"
                search={false}
                searchInput={searchInput}
                searchValue={searchValue}
            />
            <Link className='linkTo' to={'/shops'}>
                <PageBtn
                    text='Смотреть все'
                    svgId='pageBtn'
                />
            </Link>
            <TopDiscount
                items={discountCard}
            />
            <Link className='linkTo' to={'/shops'}>
                <PageBtn
                    text='Смотреть все'
                    svgId='pageBtn'
                />
            </Link>
        </>
    )
};
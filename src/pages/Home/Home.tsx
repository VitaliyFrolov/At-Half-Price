import '../../styles/index.scss'
import { AllStores } from './components/AllStores/AllStores';
import { TopDiscount } from './components/TopDiscounts/TopDiscount';
import { PageBtn } from '../../shared/PageBtn/PageBtn';
import { Link } from 'react-router-dom';

interface Props {
    discountCard: never[];

}

export const Home = ({discountCard}: Props) => {
    return (
        <>
            <AllStores />
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
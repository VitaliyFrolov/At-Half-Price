import { FC, useState, useEffect } from "react";
import { IStoreCardProps } from '../../Home/ui/StoreCard';
import { getStores } from '../../Home/lib/dataGetters'
import styles from './Page.module.scss';
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title/ui/Title";
import { StoresList } from "pages/Home/ui/StoresList";
import { Btn } from "shared/ui/Btn/Btn";
import { ProductFilter } from "shared/ui/ProductFilter/ProductFilter";

export const Page: FC = () => {
    const [stores, setStores] = useState<IStoreCardProps[]>([]);
    // const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        getStores().then((response) => setStores(response as IStoreCardProps[]));

        // document.addEventListener('scroll', scrollHeandler);
        // return function () {
        //     document.removeEventListener('scroll', scrollHeandler);
        // }
    }, []);

    // const scrollHeandler = (e) => {
    //     console.log('scroll!')
    // }

    return (
        <Container>
            <section>
                <div className={styles.listHeader}>
                    <Title text='Магазины' />
                </div>
               <div className={styles.filterWrapper}>
                    <ProductFilter />
               </div>
                <StoresList items={stores} />
                <div className={styles.btnWrapper}>
                    <Btn text='Показать еще' />
                </div>
            </section>
        </Container>
    )
}
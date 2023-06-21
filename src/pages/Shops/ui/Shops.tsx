import { FC, useEffect, useState } from "react";
// import { PageBtn } from "../../../shared/PageBtn/PageBtn";
// import { AllStores } from "../../Home/components/AllStores/DiscountShops";
// import { getStores } from '../lib/dataGetters';

export const Shops: FC = () => {
    const [stores, setStores] = useState([]);

    // useEffect(() => {
    //     getStores().then((res) => setStores(res.data));
    // }, []);

    return (
        <main>
            {/* <AllStores
                items={stores}
                title="Магазины"
                search={true}
                placeholder="Поиск магазинов"
                filter={true}
            />
            <PageBtn text="Показать еще" /> */}
        </main>
    );
};
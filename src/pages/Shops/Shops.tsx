import React from "react";
import { PageBtn } from "../../shared/PageBtn/PageBtn";
// import { SliderNav } from "../../shared/SliderNav/SliderNav";
import { AllStores } from "../Home/components/AllStores/AllStores";

interface Props {
    storesCard: never[];
    searchInput: any;
    searchValue: any;
}

export const Shops = ({storesCard, searchInput, searchValue}: Props) => {
    return (
        <section>
            <AllStores
                items={storesCard}
                title="Магазины"
                search={true}
                placeholder="Поиск магазинов"
                searchInput={searchInput}
                searchValue={searchValue}
                filter={true}
            />
            <PageBtn 
                text="Показать еще"
            />
        </section>
    )
};
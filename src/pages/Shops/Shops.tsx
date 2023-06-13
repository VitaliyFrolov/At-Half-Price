import React from "react";
import { PageBtn } from "../../shared/PageBtn/PageBtn";
// import { SliderNav } from "../../shared/SliderNav/SliderNav";
import { AllStores } from "../Home/components/AllStores/AllStores";

interface Props {
    storesCard: never[]
}

export const Shops = ({storesCard}: Props) => {
    return (
        <section>
            <AllStores
                items={storesCard}
            />
            {/* <SliderNav /> */}
            <PageBtn 
                text="Показать еще"
            />
        </section>
    )
};
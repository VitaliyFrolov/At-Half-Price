import React from "react";
import { PageBtn } from "../../shared/PageBtn/PageBtn";
// import { SliderNav } from "../../shared/SliderNav/SliderNav";
import { AllStores } from "../Home/components/AllStores/AllStores";

export const Shops = () => {
    return (
        <section>
            <AllStores />
            {/* <SliderNav /> */}
            <PageBtn 
                text="Показать еще"
            />
        </section>
    )
};
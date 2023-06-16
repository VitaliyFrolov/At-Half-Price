import React from 'react';
import { AllStoresCard } from '../AllStoresCard/AllStoresCard';
import { SvgTools } from '../../../../svgTools/SvgTools';
import { ProductFilter } from '../../../../shared/ProductFilter/ProductFilter';
import style from './AllStores.module.scss';

interface Item {
    discount: number;
    name: string;
    imgUrl: string;
    id: number;
}

interface Props {
    items: Item[];
    title: string;
    search: boolean;
    placeholder?: string;
    searchInput: any;
    searchValue: any;
    filter?: boolean;
}

export const AllStores = ({items, title, search, placeholder, searchInput, searchValue, filter}: Props) => {
    const sortedShares = [...items].sort((a, b) => {
        if (a.discount && b.discount) {
            return b.discount - a.discount;
        } else if (a.discount) {
            return -1;
        } else {
            return 1;
        }
    });
    
    return (
        <section className={style.wrapper}>
            <div className={style.header}>
                <h2 className={style.title}>
                    {title}
                </h2>
                {search ? 
                    <form className={style.search}>
                        <span className={style.searchIcn}>
                            <SvgTools id="search" />
                        </span>
                        <input 
                            className={style.searchField}
                            type='text'
                            placeholder={placeholder}
                            value={searchValue}
                            autoFocus={true}
                            onChange={searchInput}
                         />
                        {/* <button className={style.searchBtn}>
                            <p
                                className={style.searchBtnText}
                            >Найти</p>
                        </button> */}
                    </form> : null
                }
            </div>
            {filter 
                ? <ProductFilter />
                : null
            }
            {placeholder ?
                <div className={style.cardWrapper}>
                    {sortedShares.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item: Item) => (
                        <AllStoresCard
                            discount={item.discount}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            key={item.id}
                        />
                    ))}
                </div> : 
                <div className={style.cardWrapper}>
                    {sortedShares.map((item: Item) => (
                        <AllStoresCard
                            discount={item.discount}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            key={item.id}
                        />
                    ))}
                </div>}
        </section>
    )
};